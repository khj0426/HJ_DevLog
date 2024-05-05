import Image from 'next/image';
import styled from 'styled-components';

import Flex from '@/Component/Common/Flex/Flex';

const StyledGuestBookList = styled.section`
  min-height: 700px;
  width: 500px;
  max-height: 1000px;
  overflow-y: scroll;

  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
  }

  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
`;

const EntryContent = styled.p`
  color: #343a40;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type guestBookListProps = {
  id: string;
  comment: string;
  commentTime: string;
  avatar: string;
};

const GuestBookList = ({
  guestbookList,
}: {
  guestbookList: guestBookListProps[];
}) => {
  return (
    <StyledGuestBookList>
      {guestbookList.map((value) => {
        return (
          <Flex
            key={value.id}
            justifyContent="space-between"
            width={'100%'}
            flexDirection="row"
            padding={'10px 0'}
            style={{
              borderBottom: '1px solid #dee2e6',
            }}
          >
            <Image src={value.avatar} width={30} height={30} alt="avatar" />
            <EntryContent>{value.comment}</EntryContent>
          </Flex>
        );
      })}
    </StyledGuestBookList>
  );
};

export default GuestBookList;
