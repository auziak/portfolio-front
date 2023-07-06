const ageOutput = document.querySelector("#age");

const howOldIAm = () => {
    const yearNow = new Date().getFullYear();
    const yearOfMyBirthday = new Date("1990-04-17").getFullYear();
    const dateNow = new Date().getTime();
    const thisYearBirthday = new Date(`${yearNow}-04-17`).getTime();
    const myBirthdayPassed = dateNow - thisYearBirthday;
    const yearsPassedFromMyBirthday = yearNow - yearOfMyBirthday;
    const iAmYearsOld = myBirthdayPassed ? yearsPassedFromMyBirthday : yearsPassedFromMyBirthday - 1;
    return iAmYearsOld;
}

ageOutput.setHTML(howOldIAm());
