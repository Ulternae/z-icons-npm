import React from 'react';

export interface MinaHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHand: React.FC<MinaHandProps>;
export default MinaHand;
