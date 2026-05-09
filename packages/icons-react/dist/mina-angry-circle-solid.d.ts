import React from 'react';

export interface MinaAngryCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAngryCircleSolid: React.FC<MinaAngryCircleSolidProps>;
export default MinaAngryCircleSolid;
