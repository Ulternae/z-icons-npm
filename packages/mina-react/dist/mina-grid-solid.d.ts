import React from 'react';

export interface MinaGridSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGridSolid(props: MinaGridSolidProps): React.ReactElement;
export default MinaGridSolid;
