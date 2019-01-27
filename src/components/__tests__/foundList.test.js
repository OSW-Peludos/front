import React from 'react';
import { shallow, mount } from 'enzyme';
import "./setupTests"
import waitUntil from 'async-wait-until';
import FoundList from '../FoundList';

describe('List of lost animals is shown', () => {
    beforeAll(async ()=>{
    });


    it('shows the list of last lost animals',  async (done) => {
        const foundListWrapper = shallow(
            <FoundList match={{params: {nmun:"Alcorcón"}}}/>
        );
        await waitUntil(() => foundListWrapper.state('listFound')!== null);
        //console.log(wrapperDemographic.state());
        expect(foundListWrapper.state().listFound).not.undefined;
        done();
    });



});