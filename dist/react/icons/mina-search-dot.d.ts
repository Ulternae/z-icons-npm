import React from 'react';

export interface MinaSearchDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchDot: React.FC<MinaSearchDotProps>;
export default MinaSearchDot;
