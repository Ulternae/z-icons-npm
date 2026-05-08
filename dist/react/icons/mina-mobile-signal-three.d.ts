import React from 'react';

export interface MinaMobileSignalThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMobileSignalThree: React.FC<MinaMobileSignalThreeProps>;
export default MinaMobileSignalThree;
