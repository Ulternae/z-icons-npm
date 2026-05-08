import React from 'react';

export interface MinaCogFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogFour: React.FC<MinaCogFourProps>;
export default MinaCogFour;
