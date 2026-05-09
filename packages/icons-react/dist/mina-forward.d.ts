import React from 'react';

export interface MinaForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForward: React.FC<MinaForwardProps>;
export default MinaForward;
