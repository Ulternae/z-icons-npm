import React from 'react';

export interface BruTailwindCssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTailwindCss: React.FC<BruTailwindCssProps>;
export default BruTailwindCss;
