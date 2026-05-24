import React from 'react';

export interface BruItchIoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruItchIo: React.FC<BruItchIoProps>;
export default BruItchIo;
