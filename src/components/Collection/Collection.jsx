import React, {useEffect, useState} from 'react';
import AppFunctions from '../../requests';
import AddCard from '../CardMain/add';
import DeleteCard from '../CardMain/delete';
import EditCard from '../CardMain/edit';
import AddCollection from '../CollectionMain/new';
import { Container, Dropdown } from 'semantic-ui-react'

const  CardCollections = () => {

const [collections, setCollections] = useState();
const [cards, setCards] = useState();
const [card, setCard] = useState({
    collection: null,
    card_question: '',
    card_answer: ''
})
const [flip, setFlip] = useState({
    clicked : false
})
const [selectedCollection, setSelectedCollection] = useState({
    id: null,
    name: ''
})

useEffect(() => {
    getAllCollections();
}, [card, cards])

useEffect(() => {
    getAllFlashcards();
}, [card])
useEffect(() => {
    
}, [collections])

async function getAllFlashcards(){
    await AppFunctions.getAllFlashcards()
    .then(response => {
        setCards(response.data)
    })
};

async function getAllCollections() {
    await AppFunctions.getAllCollections()
    .then(response => {
        setCollections(response.data)
    })
};

const handleAddCard = (value) => {
    let array = [...cards]
    array.push(value)
    setCards(array)
}

const handleAddCollection = (value) => {
    let array = [...collections]
    array.push(value)
    setCollections(array)
}

const handleEdit = (value) => {
    setCard({
        collection: value.collection,
        card_question: value.card_question,
        card_answer: value.card_answer
    })
}

const handleDelete = (value) => {
    let array = [...cards]
    let index = array.indexOf(value)
    if( index !== -1){
        array.splice(index, 1);
    }
    setCards(array)
}


const handleClickEventCard = () => {
    if (flip.clicked === false){
        setFlip({clicked: true})
    }
    if (flip.clicked === true){
        setFlip({clicked: false})
    }
}

const collectionSelect = (e) => {
    collections.forEach(collection => {
        let tempId = parseInt(e)
        if (tempId === collection.id){
                setSelectedCollection({
                    id: parseInt(e),
                    name: collection.collection_name
                })
            }

        if(e === null){
            setSelectedCollection({
                id: null,
                name: collection.collection_name
            })
        }
        }
    )
}


let allCollectionsCards = [];
let selectedCollectionCards = [];

    return (
        <div>
            <Container>
            <Dropdown
    placeholder='Select a technology to study'
    fluid
    selection={getAllCollections}
    />
  </Container>
            </div> 
    )
}

export default CardCollections