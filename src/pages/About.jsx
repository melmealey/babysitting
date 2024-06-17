import { Image, Heading, Flex } from '@chakra-ui/react'


export default function About() {
  return (
    
      <div>

        <Heading
          as="h1" className="satisfy-regular" size="xl">Babysitting Brynn
        </Heading>
        <div>
        <Flex direction="column" alignItems="center">
          <Image
            // borderRadius='full'
            // boxSize='150px'
            src='./images/baby.png'
            alt='Brynn Pearce'
          />
          </Flex>
          <h2>Experience</h2>
          <p>
         I have been babsitting for ....3 years.
          </p>
          <p>
I enjoy babysitting because.....          </p>
          <p>
         I babysit all ages but my specialty is....

          </p>
        </div>
      </div>
    
  );
}