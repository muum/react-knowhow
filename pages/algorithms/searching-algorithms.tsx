import React from 'react';
import Gist from 'react-gist';

import { Paragraph, SectionTitle } from '@components';
import PostTemplate from '@templates/Post.template';

export default function SearchingAlgorithms() {
  return (
    <PostTemplate title="Searching Algorithms">
      <Paragraph>
        Searching algorithms are used to find specific items in a collection of data. They are an
        essential part of computer science and programming, and are used in many different
        applications, such as searching a database, finding a specific item in a list, or searching
        through a text file.
      </Paragraph>
      <Paragraph>
        There are many different types of searching algorithms, each with its own strengths and
        weaknesses, and each designed to solve specific problems. Some algorithms are faster than
        others, some are more efficient in certain situations, and some are more complex than
        others.
      </Paragraph>
      <Paragraph>
        In general, a searching algorithm is a way of finding a specific item in a collection of
        data.
      </Paragraph>
      <SectionTitle>Linear Search</SectionTitle>
      <Paragraph>
        Linear search, also known as sequential search, is a simple searching algorithm that checks
        every element in a list until it finds the item it is looking for.
      </Paragraph>
      <Gist id="7c4a9c2261ee4821ce7553200ede2aed" />
      <Paragraph>
        In this example, the linearSearch function takes an array and a target value as arguments,
        and returns the index of the target element if it is found in the array. If the target
        element is not found, the function returns -1. The function uses a for loop to iterate
        through each element of the array, and uses an if statement to compare each element with the
        target value. If a match is found, the index of the element is returned.
      </Paragraph>
      <SectionTitle>Binary Search</SectionTitle>
      <Paragraph>
        Binary search is a faster searching algorithm that only works on sorted lists. It works by
        repeatedly dividing the list in half until it finds the item it is looking for.
      </Paragraph>
      <Gist id="cb4b5c112c2880d2423ef34f87b012b7" />
      <Paragraph>
        In this implementation, the binarySearch function takes an array and a target value as
        parameters and returns the index of the target value in the array if it exists, or -1 if it
        does not. The function initializes the left and right endpoints of the search interval to
        the beginning and end of the array, respectively. Then, it enters a loop that continues as
        long as the search interval is not empty. In each iteration of the loop, the function
        computes the midpoint of the search interval and compares the value at that index to the
        target value. If the value at the midpoint is equal to the target value, the function
        returns the index of the midpoint. Otherwise, if the value at the midpoint is less than the
        target value, the function updates the left endpoint of the search interval to be one index
        greater than the midpoint. Conversely, if the value at the midpoint is greater than the
        target value, the function updates the right endpoint of the search interval to be one index
        less than the midpoint. The loop continues until either the target value is found or the
        search interval is empty, at which point the function returns -1 to indicate that the target
        value was not found in the array.
      </Paragraph>
      <SectionTitle>Interpolation Search</SectionTitle>
      <Paragraph>
        Interpolation search is another faster searching algorithm that works on sorted lists. It
        works by using interpolation to guess where the item might be, and then checks that position
        to see if the item is there.
      </Paragraph>
      <Gist id="00bc8e5e9b46856af984740feaf1a1c3" />
      <Paragraph>
        In this implementation, the array parameter is the sorted array being searched, and the
        target parameter is the value being searched for.
      </Paragraph>{' '}
      <Paragraph>
        The low and high variables are used to keep track of the endpoints of the current search
        range.
      </Paragraph>
      <Paragraph>
        The while loop is used to iterate over the array until the target value is found or the
        search range is exhausted. The loop condition ensures that the target value is within the
        current search range and that the search range has not been exhausted.
      </Paragraph>
      <Paragraph>
        The position variable calculates the estimated position of the target value in the array
        based on its value and the values of the endpoints of the search range.
      </Paragraph>
      <Paragraph>
        The first if statement checks if the estimated position contains the target value, in which
        case it returns the position.
      </Paragraph>
      <Paragraph>
        If the target value is greater than the value at the estimated position, the search range is
        narrowed to the upper half of the remaining array by updating low to be position + 1.
      </Paragraph>
      <Paragraph>
        If the target value is less than the value at the estimated position, the search range is
        narrowed to the lower half of the remaining array by updating high to be position - 1.
      </Paragraph>
      <Paragraph>
        If the target value is not found, the function returns -1 to indicate that the value was not
        found in the array.
      </Paragraph>
      <Paragraph>
        Overall, interpolation search is a more efficient search algorithm than linear search and
        can be more efficient than binary search when the values in the array are uniformly
        distributed.
      </Paragraph>
      <SectionTitle>Hashing</SectionTitle>
      <Paragraph>
        Hashing is a searching algorithm that uses a hash function to generate a unique key for each
        item in a collection of data. The key is used to quickly find the item without having to
        search through the entire collection.
      </Paragraph>
      <Gist id="0c23f1a808b65e2437d3b52158a21fee" />
      <Paragraph>
        In this example, the hashKey function is used to generate a unique key for each piece of
        data, based on the length of the key. The addData function uses the set method of the Map
        object to add the data to the hash table, using the generated key. The getData function uses
        the get method of the Map object to retrieve the data from the hash table, using the
        generated key.
      </Paragraph>
      <Paragraph>
        Hashing can also be used in cryptography, where it is used to generate digital signatures
        and verify data integrity. In cryptography, a hash function is used to generate a
        fixed-length digital signature for a piece of data, which can be used to verify its
        authenticity and integrity.
      </Paragraph>
    </PostTemplate>
  );
}
