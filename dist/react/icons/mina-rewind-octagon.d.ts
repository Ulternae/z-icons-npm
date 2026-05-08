import React from 'react';

export interface MinaRewindOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindOctagon: React.FC<MinaRewindOctagonProps>;
export default MinaRewindOctagon;
