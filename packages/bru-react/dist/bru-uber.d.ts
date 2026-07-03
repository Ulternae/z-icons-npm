import React from 'react';

export interface BruUberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUber(props: BruUberProps): React.ReactElement;
export default BruUber;
