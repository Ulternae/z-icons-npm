import React from 'react';

export interface MinaShovelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShovel(props: MinaShovelProps): React.ReactElement;
export default MinaShovel;
