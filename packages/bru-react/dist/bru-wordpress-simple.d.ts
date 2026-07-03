import React from 'react';

export interface BruWordpressSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWordpressSimple(props: BruWordpressSimpleProps): React.ReactElement;
export default BruWordpressSimple;
