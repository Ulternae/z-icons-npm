import React from 'react';

export interface LanAlignRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignRight: React.FC<LanAlignRightProps>;
export default LanAlignRight;
