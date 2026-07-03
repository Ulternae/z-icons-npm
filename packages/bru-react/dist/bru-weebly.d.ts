import React from 'react';

export interface BruWeeblyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWeebly(props: BruWeeblyProps): React.ReactElement;
export default BruWeebly;
