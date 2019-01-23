import React from 'react';
import { shallow, mount } from 'enzyme';
import "./setupTests"
import ShortAnimalCard from '../ShortAnimalCard';
import { FaDog } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';

describe('Animal card is displayed properly', () => {
    beforeAll(async ()=>{
    });

    const testRecordFound = {
        "_id" : "test_registry_found_ex2",
        "animal" : {
            "size" : "small",
            "_id" : "test_animal_id_found2",
            "animalType" : "cat",
            "animalRace" : "Siames",
            "color" : "white",
            "photoId" : "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_67XDz4PgAhVqBWMBHePsArUQjRx6BAgBEAU&url=https%3A%2F%2Fnews.nationalgeographic.com%2F2018%2F05%2Fanimals-cats-training-pets%2F&psig=AOvVaw1IAjH1WHk0am06JKe8qFRV&ust=1548323195446371"
        },
        "contact" : {
            "contactName" : "John Doe2",
            "contactEmail" : "jdoe2@johndoe.com",
            "contactPhone" : 606065544,
            "_id" : "invalid_contact_id"
        },
        "coordinates" : [
            40.22,
            3.86
        ],
        "date" : new Date(),
        "status" : "found"
    }

    const shortAnimalCard = shallow(
        <ShortAnimalCard record={testRecordFound}/>
    );
    it('description is present',  () => {
        const descriptionClass = shortAnimalCard.find(".description");
        expect(descriptionClass.length).greaterThan(0);
    });
    it('animal icon is present', () => {
        const hasIcon = shortAnimalCard.contains(<FaCat/>) || shortAnimalCard.contains(<FaDog/>);
        expect(hasIcon).to.be.true;
    });



});