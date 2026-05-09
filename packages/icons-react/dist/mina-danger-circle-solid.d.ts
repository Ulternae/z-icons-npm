import React from 'react';

export interface MinaDangerCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerCircleSolid: React.FC<MinaDangerCircleSolidProps>;
export default MinaDangerCircleSolid;
