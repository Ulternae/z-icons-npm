import React from 'react';

export interface MinaInfinityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfinity(props: MinaInfinityProps): React.ReactElement;
export default MinaInfinity;
