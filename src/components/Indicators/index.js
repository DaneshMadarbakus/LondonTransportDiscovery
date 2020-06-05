import React from 'react';
import './styles.css';

export const NightService = () => <Badge>
  <div className="night h-100 w-100"></div>
</Badge>

export const GoodService = () => <Badge>
<div className="green h-100 w-100"></div>
</Badge>

export const DisruptedService = () => <Badge>
<div className="red h-100 w-100"></div>
</Badge>

export const UserBadge = ({src, alt}) => <Badge height={30} width={30}>
  <img src={src} alt={alt} />
</Badge>

export const BigUserBadge = ({src, alt, ...props}) => <Badge {...props}>
<img src={src} alt={alt} />
</Badge>

export const Badge = ({ children, height = 15, width = 15 }) => <span
  style={{ 
    height, width 
  }} className="badge">{children}</span>