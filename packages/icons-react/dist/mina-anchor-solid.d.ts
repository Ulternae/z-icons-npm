import React from 'react';

export interface MinaAnchorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnchorSolid: React.FC<MinaAnchorSolidProps>;
export default MinaAnchorSolid;
