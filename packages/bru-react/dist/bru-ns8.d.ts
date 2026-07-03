import React from 'react';

export interface BruNs8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNs8(props: BruNs8Props): React.ReactElement;
export default BruNs8;
