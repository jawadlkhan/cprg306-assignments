import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Jawad Latif</h1>
      <p><Link href="https://github.com/jawadlkhan/cprg306-assignments" passHref>github</Link></p>
    </div>
  );
};

export default StudentInfo;
