import React from 'react';

export interface BruFirefoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFirefox(props: BruFirefoxProps): React.ReactElement;
export default BruFirefox;
