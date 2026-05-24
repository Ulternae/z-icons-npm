import React from 'react';

export interface BruCssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCss: React.FC<BruCssProps>;
export default BruCss;
