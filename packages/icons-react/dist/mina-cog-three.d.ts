import React from 'react';

export interface MinaCogThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogThree: React.FC<MinaCogThreeProps>;
export default MinaCogThree;
