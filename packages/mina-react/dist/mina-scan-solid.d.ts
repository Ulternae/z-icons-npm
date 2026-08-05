import React from 'react';

export interface MinaScanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaScanSolid(props: MinaScanSolidProps): React.ReactElement;
export default MinaScanSolid;
