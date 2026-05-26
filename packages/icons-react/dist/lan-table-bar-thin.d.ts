import React from 'react';

export interface LanTableBarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableBarThin: React.FC<LanTableBarThinProps>;
export default LanTableBarThin;
