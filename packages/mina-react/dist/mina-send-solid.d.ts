import React from 'react';

export interface MinaSendSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSendSolid(props: MinaSendSolidProps): React.ReactElement;
export default MinaSendSolid;
