import React from 'react';

export interface MinaYenSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenSquareSolid: React.FC<MinaYenSquareSolidProps>;
export default MinaYenSquareSolid;
