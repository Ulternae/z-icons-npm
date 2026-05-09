import React from 'react';

export interface MinaUserCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserCircle: React.FC<MinaUserCircleProps>;
export default MinaUserCircle;
