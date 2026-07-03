import React from 'react';

export interface BruTailwindCssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTailwindCss(props: BruTailwindCssProps): React.ReactElement;
export default BruTailwindCss;
