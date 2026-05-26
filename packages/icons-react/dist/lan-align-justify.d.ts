import React from 'react';

export interface LanAlignJustifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignJustify: React.FC<LanAlignJustifyProps>;
export default LanAlignJustify;
