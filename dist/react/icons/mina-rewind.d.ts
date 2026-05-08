import React from 'react';

export interface MinaRewindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewind: React.FC<MinaRewindProps>;
export default MinaRewind;
