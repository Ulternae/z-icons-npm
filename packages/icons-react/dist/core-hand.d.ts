import React from 'react';

export interface CoreHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHand: React.FC<CoreHandProps>;
export default CoreHand;
