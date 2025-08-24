const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
];

// 1st task
function findMaxPayment(payments = []) {
  return payments.reduce((maxPayment, { payedAmount }) => {
    return payedAmount > maxPayment ? payedAmount : maxPayment;
  }, 0);
}

console.log(findMaxPayment(payments));

// 2nd task
function getSumOfPayments(payments = []) {
  return payments.reduce((sum, { payedAmount }) => {
    return sum + payedAmount;
  }, 0);
}

// 3rd task
function foundCountOfPayments(payments = [], minPayment = 0) {
  const filteredPayments = payments.filter(
    ({ payedAmount }) => payedAmount > minPayment
  );

  return filteredPayments.length;
}

// 4th task
function getAverageOfPayments(payments = []) {
  return getSumOfPayments(payments) / payments.length;
}

// 5th task
function getStudentsWithTotalPayment(payments = []) {
  return payments.reduce((totalPayments, { payedAmount, year, ...tail }) => {
    const foundItem = totalPayments.find(
      (payment) => payment.studentId === tail.studentId
    );

    if (foundItem) foundItem.totalPayment += payedAmount;
    else
      totalPayments.push({
        ...tail,
        totalPayment: payedAmount,
      });

    return totalPayments;
  }, []);
}

console.log(getStudentsWithTotalPayment(payments));
