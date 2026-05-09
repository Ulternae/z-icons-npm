import React from 'react';

export interface MinaPercentageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentage: React.FC<MinaPercentageProps>;
export default MinaPercentage;
