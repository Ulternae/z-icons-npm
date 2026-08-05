import React from 'react';

export interface MinaAlignHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignHorizontalSolid(props: MinaAlignHorizontalSolidProps): React.ReactElement;
export default MinaAlignHorizontalSolid;
