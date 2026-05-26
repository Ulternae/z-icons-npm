import React from 'react';

export interface LanTableBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableBar: React.FC<LanTableBarProps>;
export default LanTableBar;
