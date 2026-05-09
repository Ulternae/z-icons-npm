import React from 'react';

export interface MinaIndifferentCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIndifferentCircleSolid: React.FC<MinaIndifferentCircleSolidProps>;
export default MinaIndifferentCircleSolid;
