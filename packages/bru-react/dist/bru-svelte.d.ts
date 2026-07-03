import React from 'react';

export interface BruSvelteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSvelte(props: BruSvelteProps): React.ReactElement;
export default BruSvelte;
