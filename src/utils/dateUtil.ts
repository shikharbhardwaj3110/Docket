export const getFormattedDate = (): string => {
    const today: Date = new Date();
    const day: string = String(today.getDate()).padStart(2, '0');
    const month: string = String(today.getMonth() + 1).padStart(2, '0');
    const year: number = today.getFullYear();
    const formattedDate: string = `${day}-${month}-${year}`;
    console.log("Formatted date to be saved in store : ", formattedDate)
    return formattedDate;
};


export const formatDate = (inputDate: string): string => {
    const dateParts = inputDate.split('-');
    const day : number = parseInt(dateParts[0]);
    const month : number = parseInt(dateParts[1]) - 1;
    const year : number = parseInt(dateParts[2]);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const formattedDate : string = `${day} ${months[month]}, ${year}`;
    console.log("Formatted date to be displayed in UI : ", formattedDate)
    return formattedDate;
};
  


