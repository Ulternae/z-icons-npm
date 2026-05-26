import React from 'react';

export interface LanAlignLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignLeftRegular: React.FC<LanAlignLeftRegularProps>;
export default LanAlignLeftRegular;
