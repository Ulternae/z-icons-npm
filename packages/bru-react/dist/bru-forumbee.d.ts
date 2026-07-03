import React from 'react';

export interface BruForumbeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruForumbee(props: BruForumbeeProps): React.ReactElement;
export default BruForumbee;
