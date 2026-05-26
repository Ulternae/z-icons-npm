import React from 'react';

export interface LanEyeDropperEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperEmptySolid: React.FC<LanEyeDropperEmptySolidProps>;
export default LanEyeDropperEmptySolid;
