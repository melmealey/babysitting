import { Image, Heading, Flex } from '@chakra-ui/react'


export default function About() {
  return (
    
      <div>

        <Heading
          as="h1" className="satisfy-regular" size="xl">Meet Brynn
        </Heading>
        <div>
        <Flex direction="column" alignItems="center">
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://www.cu.edu.ph/wp-content/uploads/2020/10/girl-avatar.png'
            alt='Brynn Pearce'
          />
          </Flex>
          <p>
         How long have you been babysitting?
          </p>
          <p>
           Why do you enjoy babysitting?
          </p>
          <p>
           What are your expertise? Ages?

          </p>
        </div>
      </div>
    
  );
}