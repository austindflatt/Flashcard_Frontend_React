import React from 'react';
import http from './axios'

class AppFunctions {
        getAllCollections() {
        return http.get("");
        }

        getCollection(id) {
        return http.get(`collection/${id}`);
        }

        createCollection(data) {
        return http.post("", data);
        }

        updateCollection(id, data) {
        return http.put(`collection/${id}`, data);
        }

        deleteCollection(id) {
        return http.delete(`collection/${id}`);
        }

        getAllFlashcards(){
            return http.get(`flashcards`)
        }

        getFlashcards(collectionId, flashcardId) {
        return http.get(`collection/${collectionId}/flashcards/${flashcardId}`);
        }

        createFlashcard(data){
            return http.post(`flashcards`, data)
        }

        updateFlashcard(id, collectionId, data) {
            return http.put(`collection/${collectionId}/flashcards/${id}`, data);
            }

        deleteFlashcard(id, collection) {
            return http.delete(`collection/${collection}/flashcards/${id}`);
            }


}

export default new AppFunctions();