export const getSelectorArray = (selector) =>{
    if(selector === "citys"){
        return [
            {
                id: 0,
                city: "上海"
            },
            {
                id: 1,
                city: "北京"
            },
            {
                id: 2,
                city: "深圳"
            },
            {
                id: 3,
                city: "长沙"
            }
        ]
    }
    return [];
};
