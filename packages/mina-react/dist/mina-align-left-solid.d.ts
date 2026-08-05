import React from 'react';

export interface MinaAlignLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignLeftSolid(props: MinaAlignLeftSolidProps): React.ReactElement;
export default MinaAlignLeftSolid;
