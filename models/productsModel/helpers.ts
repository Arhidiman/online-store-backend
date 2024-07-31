type CheckboxValueType = string | number | boolean
interface IFiltersParameters {
    filters: {
        priceMax: number,
        options: CheckboxValueType[]
    },
    sorters: {options: CheckboxValueType[]}
}

const generateStringCondition = (arr: (string | number | boolean)[], arrValCondition: string, join: string) => {
    return arr.map((option) => `${option} ${arrValCondition}`).join(join)
}

export const generateSorterString = (options: IFiltersParameters['sorters']['options']) => {
    return options.map(option => `${option} ASC `).join(' , ')
}

export const getFiltersCondition = (filtersData: IFiltersParameters) => {

    const {priceMax, options: filtersOptions} = filtersData.filters
    const {options: sortersOptions} = filtersData.sorters

    if (!priceMax && filtersOptions.length === 0 && sortersOptions.length === 0) return ''

    const priceCondition = priceMax && `price < ${priceMax}`
    const filtersCondition = generateStringCondition(filtersOptions, 'is not null', ' and ')
    const sortersStringCondition = generateSorterString(sortersOptions)

    const totalCondition = `
        ${priceCondition ? priceCondition : ''}
        ${filtersCondition.length > 0 ? ' and '+ filtersCondition : ''}
        ${sortersStringCondition.length > 0 ? ` order by ` + sortersStringCondition : ''}
    
    `
    return totalCondition
}