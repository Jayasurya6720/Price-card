import React from 'react'

function card({data}) {
  return (
    <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.plan==="PLUS" || data.plan==="PRO"?<b>{data.user}</b>:data.user}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.publicProject}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.access}</li>
              <li className={data.privateProjectEnable?"":"text-muted"}><span className="fa-li"><i className={data.privateProjectEnable?"fas fa-check":"fas fa-times"}></i></span>{data.privateProject}</li>
              <li className={data.supportEnable?"":"text-muted"}><span className="fa-li"><i className={data.supportEnable?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.supportEnable?"":"text-muted"}><span className="fa-li"><i className={data.subDomainEnable?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PRO"? <><b>Unlimited</b> {data.subDomain} </>:data.subDomain} </li>
              <li className={data.statusEnable?"":"text-muted"}><span className="fa-li"><i className={data.statusEnable?"fas fa-check":"fas fa-times"}></i></span>{data.status}</li>
            </ul>
            <div className="d-grid">
              <a href="javascrite(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default card