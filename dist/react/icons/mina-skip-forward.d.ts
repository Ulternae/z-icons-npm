import React from 'react';

export interface MinaSkipForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSkipForward: React.FC<MinaSkipForwardProps>;
export default MinaSkipForward;
