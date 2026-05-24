import React from 'react';

export interface BruRaspberryPiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRaspberryPi: React.FC<BruRaspberryPiProps>;
export default BruRaspberryPi;
