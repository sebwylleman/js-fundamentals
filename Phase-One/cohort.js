const cohort = {
  name: 'February 2023',
  id: 1116,
  students: ['Jeff', 'Mia', 'John'],
};

const cohortInfo = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort['name']} - ${cohort.students.length} students in this cohort`
  );
};

cohortInfo(cohort);
