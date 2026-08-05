import React from 'react';

export interface MinaCornerLeftUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerLeftUpSolid(props: MinaCornerLeftUpSolidProps): React.ReactElement;
export default MinaCornerLeftUpSolid;
