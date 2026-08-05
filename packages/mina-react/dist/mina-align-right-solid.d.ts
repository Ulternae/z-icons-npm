import React from 'react';

export interface MinaAlignRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignRightSolid(props: MinaAlignRightSolidProps): React.ReactElement;
export default MinaAlignRightSolid;
