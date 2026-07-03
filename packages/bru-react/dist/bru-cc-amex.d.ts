import React from 'react';

export interface BruCcAmexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcAmex(props: BruCcAmexProps): React.ReactElement;
export default BruCcAmex;
