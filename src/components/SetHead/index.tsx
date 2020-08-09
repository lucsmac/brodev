import React, { useEffect } from 'react'

interface SetHeadProps {
  title: string,
  description: string
}

const SetHead: React.FC<SetHeadProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector("meta[name='description']")
    metaDescription && metaDescription.setAttribute('content', description)
  }, [title, description]);

  return <></>;
};

export default SetHead
