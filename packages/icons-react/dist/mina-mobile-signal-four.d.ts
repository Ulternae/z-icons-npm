import React from 'react';

export interface MinaMobileSignalFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMobileSignalFour: React.FC<MinaMobileSignalFourProps>;
export default MinaMobileSignalFour;
