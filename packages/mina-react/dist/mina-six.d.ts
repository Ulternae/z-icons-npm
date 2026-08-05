import React from 'react';

export interface MinaSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSix(props: MinaSixProps): React.ReactElement;
export default MinaSix;
