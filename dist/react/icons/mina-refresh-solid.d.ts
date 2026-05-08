import React from 'react';

export interface MinaRefreshSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRefreshSolid: React.FC<MinaRefreshSolidProps>;
export default MinaRefreshSolid;
