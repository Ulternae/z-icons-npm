import React from 'react';

export interface LanBorderBottomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderBottomSolid: React.FC<LanBorderBottomSolidProps>;
export default LanBorderBottomSolid;
