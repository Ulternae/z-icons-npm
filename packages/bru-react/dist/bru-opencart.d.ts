import React from 'react';

export interface BruOpencartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOpencart(props: BruOpencartProps): React.ReactElement;
export default BruOpencart;
