import React from 'react';

export interface MinaTentTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTentTreeSolid(props: MinaTentTreeSolidProps): React.ReactElement;
export default MinaTentTreeSolid;
