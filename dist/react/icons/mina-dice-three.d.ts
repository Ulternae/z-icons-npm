import React from 'react';

export interface MinaDiceThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceThree: React.FC<MinaDiceThreeProps>;
export default MinaDiceThree;
