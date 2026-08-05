import React from 'react';

export interface MinaSupportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSupport(props: MinaSupportProps): React.ReactElement;
export default MinaSupport;
