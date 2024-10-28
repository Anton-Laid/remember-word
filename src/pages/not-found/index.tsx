interface Props {
  className?: string;
}

export const NotFound: React.FC<Props> = ({ className }) => {
  return <div className={className}>404</div>;
};
