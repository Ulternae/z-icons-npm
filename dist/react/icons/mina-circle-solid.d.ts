import React from 'react';

export interface MinaCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleSolid: React.FC<MinaCircleSolidProps>;
export default MinaCircleSolid;
