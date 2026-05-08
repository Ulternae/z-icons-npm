import React from 'react';

export interface MinaMobileSignalFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMobileSignalFive: React.FC<MinaMobileSignalFiveProps>;
export default MinaMobileSignalFive;
