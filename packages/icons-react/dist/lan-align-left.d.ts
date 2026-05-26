import React from 'react';

export interface LanAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignLeft: React.FC<LanAlignLeftProps>;
export default LanAlignLeft;
