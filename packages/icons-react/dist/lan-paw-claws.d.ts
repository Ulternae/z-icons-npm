import React from 'react';

export interface LanPawClawsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawClaws: React.FC<LanPawClawsProps>;
export default LanPawClaws;
