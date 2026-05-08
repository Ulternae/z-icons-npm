import React from 'react';

export interface MinaSignalSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalSquareSolid: React.FC<MinaSignalSquareSolidProps>;
export default MinaSignalSquareSolid;
