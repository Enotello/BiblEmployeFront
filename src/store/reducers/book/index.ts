import * as actions from "../../const/book";
// import Group from "../../../interface/group";

const defaultState = {
    request_status: {
        listMaps: null,
        map: null,
        group: null,
        filter: null,
        points: null,
    },
    modified: {
        listMaps: true
    },
    listMaps: [],
    map: null,
    group: [],
    filter: [],
    points: [],
};




type ActionType = {
    type: string
    payload: any
}





export const bookReducer = function(state  = defaultState, action: ActionType) {
    switch (action.type) {

        /**
         uuidPoint: uuidPoint,
         data:  response.data
         * обновление точки
         * action: updateFilterPoints
         */
        case actions.UPDATE_FILTER_POINTS_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, points: "request"},
            };
        case actions.UPDATE_FILTER_POINTS_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, points: "success"},
                points: state.points.map((item: any, index) => {
                    if (item.uuid === action.payload.uuidPoint){
                        return action.payload.data
                    }
                    return  item
                })
            };
        case actions.UPDATE_FILTER_POINTS_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, points: "error"},
            };

        /**
         *  удаление карты
         *  action: deleteMap
         */
        case actions.DELETE_MAP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, map: "request"},
            };
        case actions.DELETE_MAP_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, map: "success"},
                modified: {...state.modified, listMaps: true },
            };
        case actions.DELETE_MAP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, map: "error"},
            };
        /**
         *  удаление группы
         *  action: deleteMapGroup
         */
        case actions.DELETE_MAP_GROUP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, map: "request"},
            };
        case actions.DELETE_MAP_GROUP_REQUEST_SUCCESS:
            let _group: any = []
            state.group.map((item: any) => {
                if (item.uuid !== action.payload.uuidGroup){
                    _group.push(item)
                }
            })
            return {
                ...state,
                request_status: {...state.request_status, map: "success"},
                group: _group
            };
        case actions.DELETE_MAP_GROUP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, map: "error"},
            };

        /**
         *  удаление фильтра
         *  action: deleteGroupFilter
         */
        case actions.DELETE_GROUP_FILTER_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, map: "request"},
            };
        case actions.DELETE_GROUP_FILTER_REQUEST_SUCCESS:
            let _result: any = []
            let _filter: any = state.group.find((groupItem: any) => groupItem.uuid === action.payload.uuidGroup)
            _filter.filters.map((filterItem: any) => {
                if (filterItem.uuid !== action.payload.uuidFilter) {
                    _result.push(filterItem)
                }
            })

            return {
                ...state,
                request_status: {...state.request_status, map: "success"},
                group: state.group.map((item: any) => item.uuid === action.payload.uuidGroup ? {...item, filters: _result} : item)
            };
        case actions.DELETE_GROUP_FILTER_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, map: "error"},
            };

        /**
         * добавить точки фильтру
         * action: addFilterPointsRequest
         */
        case actions.ADD_FILTER_POINTS_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, group: "request"},
            };
        case actions.ADD_FILTER_POINTS_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, group: "success"},
                points: [...state.points, ...action.payload]
            };
        case actions.ADD_FILTER_POINTS_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, group: "error"},
            };

        /**
         * получить точки фильтра
         * action: getFilterPoints
         */
        case actions.GET_FILTER_POINTS_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, group: "request"},
                points: []
            };
        case actions.GET_FILTER_POINTS_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, group: "success"},
                points: action.payload
            };
        case actions.GET_FILTER_POINTS_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, group: "error"},
                points: []
            };

        /**
         * получение списка групп
         * action: getGroup
         */
        case actions.GET_GROUP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, group: "request"},
                group: []
            };
        case actions.GET_GROUP_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, group: "success"},
                group: action.payload
            };
        case actions.GET_GROUP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, group: "error"},
                group: []
            };

        /**
         * добавление группы
         * action: addGroup
         */
        case actions.ADD_GROUP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, group: "request"},
            };
        case actions.ADD_GROUP_REQUEST_SUCCESS:

            return {
                ...state,
                request_status: {...state.request_status, group: "success"},
                group: [...state.group,action.payload ]
            };
        case actions.ADD_GROUP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, group: "error"},
            };

        /**
         * обноваление группы
         * action: updateGroup
         */
        case actions.UPDATE_GROUP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, group: "request"},
            };
        case actions.UPDATE_GROUP_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, group: "success"},
                group: state.group.map((item: any) => {
                    if (item.uuid === action.payload.uuid){
                        return action.payload
                    }else {
                        return item
                    }
                })
            };
        case actions.UPDATE_GROUP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, group: "error"},
            };

        /**
         * добавление фильтра
         * action: addFilter
         */
        case actions.ADD_FILTER_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, filter: "request"},
            };
        case actions.ADD_FILTER_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, filter: "success"},
                group: state.group.map((item: any) => {
                    if (item.uuid === action.payload.uuid){
                        return {...item, children: [...item.children, {
                                title: action.payload.data.name,
                                key: action.payload.data.uuid,
                                uuid: action.payload.data.uuid,
                                type: "filter",
                            }]}
                    }else {
                        return item
                    }
                })
            };
        case actions.ADD_FILTER_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, filter: "error"},
            };

        /**
         * обноваление фильтра
         * action: updateFilter
         */
        case actions.UPDATE_FILTER_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, filter: "request"},
            };
        case actions.UPDATE_FILTER_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, filter: "success"},
                group: state.group.map((item: any) => {
                    if (item.uuid === action.payload.uuidGroup){
                        return {...item, filters: item.filters.map((filter: any) => {
                                if (filter.uuid === action.payload.uuidFilter){
                                    return action.payload.data
                                }else {
                                    return filter
                                }
                            })}
                    }else {
                        return item
                    }
                })
            };
        case actions.UPDATE_FILTER_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, filter: "error"},
            };

        /**
         * выбор карты
         * action: mapSelected
         */
        case actions.MAP_SELECTED:
            return {
                ...state,
                map: action.payload
            };

        /**
         * получить список карт
         * action: getMapsRequest
         */
        case actions.GET_MAPS_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, listMaps: "request"},
                listMaps: []
            };
        case actions.GET_MAPS_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, listMaps: "success"},
                modified: {...state.modified, listMaps: false },
                listMaps: action.payload
            };
        case actions.GET_MAPS_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, listMaps: "error"},
                listMaps: []
            };

        /**
         * добавить карту
         * action: addMapsRequest
         */
        case actions.ADD_MAP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, map: "request"},
                map: null
            };
        case actions.ADD_MAP_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, map: "success"},
                modified: {...state.modified, listMaps: true },
                map: action.payload
            };
        case actions.ADD_MAP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, map: "error"},
                map: null
            };

        /**
         * обновить данные карты
         * action: updateMapsRequest
         */
        case actions.UPDATE_MAP_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, map: "request"},
            };
        case actions.UPDATE_MAP_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, map: "success"},
                modified: {...state.modified, listMaps: true },
                map: action.payload
            };
        case actions.UPDATE_MAP_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, map: "error"},
            };

        /**
         * добавление точек
         * action: addPointsRequest
         */
        case actions.ADD_POINT_REQUEST:
            return {
                ...state,
                request_status: {...state.request_status, points: "request"},
                points: []
            };
        case actions.ADD_POINT_REQUEST_SUCCESS:
            return {
                ...state,
                request_status: {...state.request_status, points: "success"},
                points: action.payload
            };
        case actions.ADD_POINT_REQUEST_ERROR:
            return {
                ...state,
                request_status: {...state.request_status, points: "error"},
                points: []
            };

        default:
            return state;
    }

};
