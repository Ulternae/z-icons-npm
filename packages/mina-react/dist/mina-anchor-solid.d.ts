import React from 'react';

export interface MinaAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAnchorSolid(props: MinaAnchorSolidProps): React.ReactElement;
export default MinaAnchorSolid;
