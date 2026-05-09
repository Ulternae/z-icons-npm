import React from 'react';

export interface MinaThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThree: React.FC<MinaThreeProps>;
export default MinaThree;
