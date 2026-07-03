import React from 'react';

export interface BruYoastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYoast(props: BruYoastProps): React.ReactElement;
export default BruYoast;
