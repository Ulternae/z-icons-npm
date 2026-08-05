import React from 'react';

export interface MinaShovelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShovelSolid(props: MinaShovelSolidProps): React.ReactElement;
export default MinaShovelSolid;
