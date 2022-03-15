import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import isReact from "is-react";

import * as data from "../../db.json";
import ActivityCreate from "./VideogameCreate";

configure({ adapter: new Adapter() });

describe("<ActivityCreate />", () => {
  const state = { activities: data.activities };
  const mockStore = configureStore([thunk]);

  beforeAll(() => expect(isReact.classComponent(ActivityCreate)).toBeFalsy());

  describe("Estructura", () => {
    let ActivityCreate;
    let store = mockStore(state);
    beforeEach(() => {
      ActivityCreate = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/videogame"]}>
            <ActivityCreate />
          </MemoryRouter>
        </Provider>
      );
    });

    it("Debería renderizar un form", () => {
      expect(ActivityCreate.find("form")).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Name: "', () => {
      expect(ActivityCreate.find("label").at(0).text()).toEqual("Name: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
      expect(ActivityCreate.find('input[name="name"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Difficulty: "', () => {
      expect(ActivityCreate.find("label").at(1).text()).toEqual("Difficulty: ");
    });

    it('Debería renderizar un select con la propiedad "name" igual a "difficulty"', () => {
      expect(ActivityCreate.find('select[name="difficulty"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Duration: "', () => {
      expect(ActivityCreate.find("label").at(2).text()).toEqual("Duration: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "duration"', () => {
      expect(ActivityCreate.find('input[name="duration"]')).toHaveLength(1);
    }); //---------------------------------

    it('Debería renderizar un label con el texto "Season: "', () => {
      expect(ActivityCreate.find("label").at(3).text()).toEqual("Season: ");
    });

    it('Debería renderizar un select con la propiedad "name" igual a "season"', () => {
      expect(ActivityCreate.find('select[name="season"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Country: "', () => {
      expect(ActivityCreate.find("label").at(4).text()).toEqual("Country: ");
    });

    it('Debería renderizar un select con la propiedad "name" igual a "countries"', () => {
      expect(ActivityCreate.find('select[name="countries"]')).toHaveLength(1);
    });

    it('Debería renderizar un button con "type" igual a "submit" y con texto "To Create"', () => {
      expect(ActivityCreate.find('button[type="submit"]')).toHaveLength(1);
      expect(ActivityCreate.find("button").at(0).text()).toEqual("To Create");
    });
  });
});
