import React, {useState, useEffect} from 'react';
import AppFunctions from '../../requests';
import { Container, Dropdown } from 'semantic-ui-react'


const Cards = () => {

    const [collections, setCollections] = useState({
        collections: [],
        collection_name: "",
    });
    const [cards, setCards] = useState(
        {
            collection: null,
            cards: [],
        }
    );
    const [selectedCollection, setSelectedCollection] = useState({
        id: null,
        collectionName: "",
        length: null
    })
    const [currentCard, setCurrentCard] = useState({
        currentCard: 0,
        totalCards: 0,
        isFlipped: false
    })


    useEffect(() => {
        getAllCollections()
        getCards()
    }, [])

    const getCards = () => {
        AppFunctions.getAllFlashcards()
        .then(response => {
            setCards({
                cards: response.data
            });
        })
        .catch(error => {
            console.log(error);
        } )
        }
    
    const getAllCollections = () => {
        AppFunctions.getAllCollections()
        .then(response => {
            setCollections({
                collection: response.data
            });
        })
        .catch(error=>{
            console.log(error)
        })
        }

    const collectionSelect = (e) => {
        let tempId = parseInt(e)
        setCards({
            ...cards, collection: tempId
        })
        collections.collection.forEach(item => {
            if (item.id === tempId){
                setSelectedCollection({
                    id: tempId,
                    collectionName: item.collection_name
                })
            }
        })
    };

    const flipCard = () => {
        if (currentCard.isFlipped === false && selectedCollection.id){
            setCurrentCard({
                currentCard: currentCard.currentCard,
                isFlipped: true
            })
        }
        if (currentCard.isFlipped === true && selectedCollection.id){
            setCurrentCard({
                currentCard: currentCard.currentCard,
                isFlipped: false
            })
        }
    }

    let cardDeck = [];

    const mapCardDeck = () => {
        cards.cards.forEach((card, i) => {
            if (card.collection === selectedCollection.id){
                cardDeck.push(card)
            }
        })

        let count = currentCard.currentCard + 1;

        if(cardDeck.length === 0){
            return (<p className="card__question-individual">Select a technology</p>)
        }
        else{
            if(!currentCard.isFlipped){
                return (<div><span>{count}/{cardDeck.length}</span><p className="card__question-individual">{cardDeck[currentCard.currentCard].card_question}</p></div>)
            }
            if(currentCard.isFlipped){
                return (<div><span>{count}/{cardDeck.length}</span><p className="card__answer-individual">{cardDeck[currentCard.currentCard].card_answer}</p></div>)
            }   
        }
    }

    const handleCardChangeRight = () => {
        let count = currentCard.currentCard + 1
        let max = cardDeck.length - 1
        if(count <= max)
        setCurrentCard({
            ...currentCard,
            currentCard: count
        })
        else if(count > max){
            setCurrentCard({
                ...currentCard,
                currentCard: 0
            })
        }
        else{
            setCurrentCard({
                ...currentCard,
                currentCard: 0
            })
        }
    }

    const handleCardChangeLeft = () => {
        let count = currentCard.currentCard - 1
        let max = cardDeck.length - 1
        if(currentCard.currentCard > 0)
        setCurrentCard({
            ...currentCard,
            currentCard: count
        })
        else if (currentCard.currentCard === 0){
            setCurrentCard({
                ...currentCard,
                currentCard: max
            })
        }
        else if(count > max){
            setCurrentCard({
                ...currentCard,
                currentCard: 0
            })
        }
    }


    return (
        <div>
            <Container>
            <h2>{selectedCollection.collectionName}</h2>
            </Container>
        </div>
    )
}


export default Cards