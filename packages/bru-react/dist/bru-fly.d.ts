import React from 'react';

export interface BruFlyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFly(props: BruFlyProps): React.ReactElement;
export default BruFly;
