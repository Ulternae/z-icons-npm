import React from 'react';

export interface MinaCogTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogTwo: React.FC<MinaCogTwoProps>;
export default MinaCogTwo;
