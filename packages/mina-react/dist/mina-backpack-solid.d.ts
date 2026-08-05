import React from 'react';

export interface MinaBackpackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBackpackSolid(props: MinaBackpackSolidProps): React.ReactElement;
export default MinaBackpackSolid;
