import React from 'react';

export interface MinaTabletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTabletSolid(props: MinaTabletSolidProps): React.ReactElement;
export default MinaTabletSolid;
