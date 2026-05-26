import React from 'react';

export interface LanCutlerySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutlerySolid: React.FC<LanCutlerySolidProps>;
export default LanCutlerySolid;
