import React from 'react';

export interface MinaPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPause: React.FC<MinaPauseProps>;
export default MinaPause;
