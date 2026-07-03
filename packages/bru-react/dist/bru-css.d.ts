import React from 'react';

export interface BruCssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCss(props: BruCssProps): React.ReactElement;
export default BruCss;
