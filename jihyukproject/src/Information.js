import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InformationBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }

  .thumbnail {
    margin-right: 1rem;
    flex-shrink: 0;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .contents {
    flex: 1;

    h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: #333;

      a {
        text-decoration: none;
        color: #0077cc;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      margin: 0.2rem 0;
      font-size: 0.95rem;
      color: #555;
      line-height: 1.5;
    }

    button {
      margin-top: 0.75rem;
      padding: 0.5rem 1rem;
      background-color: #0077cc;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #005fa3;
      }
    }
  }
`;

const Information = ({ sampleRow, style, index }) => {
  const navigate = useNavigate();
  // if (!sampleRow) return null;

  const {
    prdct_cl_nm,
    prdct_nm_korean,
    thumb_image,
    mnfct_year,
    main_image,
    writr_nm,
    matrl_technic,
  } = sampleRow;
  const onClick = useCallback(() => {
    navigate(`/review/${index}`, {
      state: {
        prdct_nm_korean,
        thumb_image,
        mnfct_year,
        main_image,
        writr_nm,
        matrl_technic,
        prdct_cl_nm,
      },
    });
  }, [
    navigate,
    index,
    prdct_nm_korean,
    thumb_image,
    mnfct_year,
    main_image,
    writr_nm,
    matrl_technic,
    prdct_cl_nm,
  ]);

  return (
    <InformationBlock style={style}>
      {thumb_image && (
        <div className="thumbnail">
          <a href={main_image} target="_self" rel="noopener noreferrer">
            <img src={thumb_image} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={main_image} target="_self" rel="noopener noreferrer">
            {prdct_nm_korean}
          </a>
        </h2>
        <p>
          작가 : {writr_nm}
          <br />
          제작년도 :{mnfct_year}
          <br />
          기법 : {matrl_technic}
        </p>
        <div>
          <button onClick={onClick}>감상평 작성</button>
        </div>
      </div>
    </InformationBlock>
  );
};

export default React.memo(Information);
