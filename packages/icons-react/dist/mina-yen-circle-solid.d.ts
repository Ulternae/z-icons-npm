import React from 'react';

export interface MinaYenCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenCircleSolid: React.FC<MinaYenCircleSolidProps>;
export default MinaYenCircleSolid;
