export default function Resources({resources}) {
 
  if (!resources)
    return <span className="resources__header">no resources found</span>;

  return (
    <div className="resources">
      <span className="resources__header">Resources:</span>
      {resources.pdf && (
        <span className="resources__btn">
          <a href={resources.pdf }>PDF</a>
        </span>
      )}
      {resources.ppt && (
        <span className="resources__btn">
          <a href={resources.ppt}>PPT</a>
        </span>
      )}
    </div>
  );
}
