import React from 'react';

export interface MinaCornerLeftDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerLeftDownSolid(props: MinaCornerLeftDownSolidProps): React.ReactElement;
export default MinaCornerLeftDownSolid;
