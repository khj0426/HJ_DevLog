'use client';

import replaceStrWithBlank from '../../../lib/replaceStr';
import styled from 'styled-components';

const StyledTOCList = styled.ul`
  position: fixed;
  max-width: 235px;
  height: auto;
  max-height: 75vh;
  text-align: justify;
  width: 235px;
  margin-top: 100px;
  right: 0;
  opacity: 1;
  font-size: 15px;
  overflow-y: scroll;

  @media ${({ theme }) => theme.device.laptop} {
    opacity: 0;
  }

  @media ${({ theme }) => theme.device.tablet} {
    opacity: 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    opacity: 0;
  }
`;

const StyledTOCLink = styled.a`
  &:hover {
    color: rgb(0, 131, 120);
  }
`;

export default function TOC({ toc }: { toc: string[] }) {
  const TOC = toc.map((eachToc) => {
    const makeTOC = replaceStrWithBlank([eachToc, ['#', '##', '###', '####']]);
    return (
      <>
        <li key={eachToc}>
          <div>
            <StyledTOCLink className={`${makeTOC}`} href={`#${makeTOC}`}>
              {makeTOC}
            </StyledTOCLink>
          </div>
        </li>
      </>
    );
  });

  return <StyledTOCList>{TOC}</StyledTOCList>;
}
