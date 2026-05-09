import React from 'react';

export interface MinaClockThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockThree: React.FC<MinaClockThreeProps>;
export default MinaClockThree;
