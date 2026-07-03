import React from 'react';

export interface BruCss3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCss3(props: BruCss3Props): React.ReactElement;
export default BruCss3;
