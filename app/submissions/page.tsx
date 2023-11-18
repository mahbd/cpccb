import prisma from "@/prisma/client";
import React from "react";
import { readableDateTime } from "../../components/helpers";
import Link from "next/link";

const Submission = async () => {
  const submissions = await prisma.submission.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true, problem: true },
  });
  return (
    <div>
      <h1 className="text-center">Submission List</h1>
      <table className="table table-md table-auto w-auto">
        <thead>
          <tr>
            <th>Submission ID</th>
            <th>Time</th>
            <th>User</th>
            <th>Problem</th>
            <th>Language</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{readableDateTime(submission.createdAt.toISOString())}</td>
              <td>{submission.user.email}</td>
              <td>
                <Link
                  className="link link-primary"
                  href={`/problems/${submission.problemId}`}
                >
                  {submission.problem.title}
                </Link>
              </td>
              <td>{submission.language}</td>
              <td>{submission.verdict}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submission;
