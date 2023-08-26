export const getFormattedDate = (dateInput : Date) : string  => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', options); 
    const formattedDate: string = dateFormatter.format(dateInput);
    return formattedDate;
}

