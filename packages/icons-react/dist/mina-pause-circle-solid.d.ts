import React from 'react';

export interface MinaPauseCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseCircleSolid: React.FC<MinaPauseCircleSolidProps>;
export default MinaPauseCircleSolid;
