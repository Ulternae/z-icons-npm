import React from 'react';

export interface LanTableDiningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableDiningThin: React.FC<LanTableDiningThinProps>;
export default LanTableDiningThin;
