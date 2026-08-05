import React from 'react';

export interface MinaAlignBottomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignBottomSolid(props: MinaAlignBottomSolidProps): React.ReactElement;
export default MinaAlignBottomSolid;
