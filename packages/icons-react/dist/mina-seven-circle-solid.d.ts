import React from 'react';

export interface MinaSevenCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenCircleSolid: React.FC<MinaSevenCircleSolidProps>;
export default MinaSevenCircleSolid;
