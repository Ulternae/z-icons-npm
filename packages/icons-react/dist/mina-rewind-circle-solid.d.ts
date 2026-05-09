import React from 'react';

export interface MinaRewindCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindCircleSolid: React.FC<MinaRewindCircleSolidProps>;
export default MinaRewindCircleSolid;
