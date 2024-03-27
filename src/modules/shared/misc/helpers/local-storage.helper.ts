import jsCookie from 'js-cookie';
import _ from "lodash";

export enum StorageKey {
    LocationSearchHistoryList = "location_search_history_list"
}

export class LocalStorage {
    static getLocationSearchHistoryList() {
        return jsCookie.get(StorageKey.LocationSearchHistoryList) || null;
    }

    static setLocationSearchHistoryList(locationSearchItem: string) {
        const historyList = jsCookie.get(StorageKey.LocationSearchHistoryList)
        if (historyList) {
            const ls: string[] = JSON.parse(historyList);
            if (ls.indexOf(locationSearchItem) <= -1) {
                ls.push(locationSearchItem);
            }
            jsCookie.set(StorageKey.LocationSearchHistoryList, JSON.stringify(ls))
        } else {
            jsCookie.set(StorageKey.LocationSearchHistoryList, JSON.stringify([locationSearchItem]))
        }
    }

    static removeLocationSearchHistoryItem(locationSearchItem: string) {
        const historyList = jsCookie.get(StorageKey.LocationSearchHistoryList)
        if (historyList) {
            let ls: string[] = JSON.parse(historyList);
            const itemIndex = ls.indexOf(locationSearchItem);
            if (itemIndex) {
                ls = ls.splice(itemIndex);
            }
            jsCookie.set(StorageKey.LocationSearchHistoryList, JSON.stringify(ls));
        }
    }
};