import React from 'react';

export interface MinaOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneSolid: React.FC<MinaOneSolidProps>;
export default MinaOneSolid;
