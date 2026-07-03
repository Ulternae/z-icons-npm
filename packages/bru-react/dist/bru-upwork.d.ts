import React from 'react';

export interface BruUpworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUpwork(props: BruUpworkProps): React.ReactElement;
export default BruUpwork;
