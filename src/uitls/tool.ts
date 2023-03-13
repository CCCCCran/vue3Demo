export enum FormatsEnum {
    YDM = "Y-M-D",
    TIME = "H:m:S"
}

export const dateFormat = (timestamp: number, format: FormatsEnum) => {
    format = format || 'Y-M-D'

    // 补零函数
    const zero = (value: number) => {
        if(value < 10) {
            return "0" + value
        }
        return value
    }

    const myDate = timestamp ? new Date(timestamp) : new Date()
    
    const year = myDate.getFullYear()
    const month = zero(myDate.getMonth() + 1)
    const day = zero(myDate.getDate())

    const hour = zero(myDate.getHours())
    const minutes = zero(myDate.getMinutes())
    const second = zero(myDate.getSeconds())


    return format.replace(/Y|M|D|H|m|S/gi, function(match:string):any {
            return {
                Y:year,
                M:month,
                D:day,
                H:hour,
                m:minutes,
                S:second
            }[match]
    })
}