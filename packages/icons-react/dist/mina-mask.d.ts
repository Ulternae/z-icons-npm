import React from 'react';

export interface MinaMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMask: React.FC<MinaMaskProps>;
export default MinaMask;
