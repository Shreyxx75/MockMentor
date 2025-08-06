import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser, getInterviewsByUserId } from '@/lib/actions/auth.action'

const page = async() => {
  const user = await getCurrentUser();
  const userInterviews = await getInterviewsByUserId(user?.id!);

  const hasPastInterviews = userInterviews?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Ace Your Coding Interviews with AI-Powered Mock Interviews
          </h2>
          <p className="text-lg text-justify">
            Practice coding interviews with AI-generated questions, receive
            instant feedback, and improve your skills with personalized
            insights. Join now to enhance your interview performance and land
            your dream job!
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">
              Get Started
            </Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="AI Robot" width={400} height={400} className="max-sm:hidden"></Image>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>
          Your Mock Interviews
        </h2>
        <div className="interviews-section">
          {
            hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard key={interview.id} {...interview}/>
            ))) : (
              <p>No interviews scheduled yet. Start by creating a new mock interview.</p>
            )
          }
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>
          Upcoming Interviews
        </h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview}/>
          ))}
        </div>

      </section>
    </>
  )
}

export default page