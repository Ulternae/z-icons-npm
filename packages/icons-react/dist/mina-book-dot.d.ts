import React from 'react';

export interface MinaBookDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookDot: React.FC<MinaBookDotProps>;
export default MinaBookDot;
