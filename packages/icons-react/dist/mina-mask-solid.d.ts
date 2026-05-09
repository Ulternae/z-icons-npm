import React from 'react';

export interface MinaMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMaskSolid: React.FC<MinaMaskSolidProps>;
export default MinaMaskSolid;
