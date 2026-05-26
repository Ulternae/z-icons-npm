import React from 'react';

export interface LanAlignJustifySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignJustifySolid: React.FC<LanAlignJustifySolidProps>;
export default LanAlignJustifySolid;
