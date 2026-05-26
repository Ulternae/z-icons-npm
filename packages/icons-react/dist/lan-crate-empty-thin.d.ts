import React from 'react';

export interface LanCrateEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrateEmptyThin: React.FC<LanCrateEmptyThinProps>;
export default LanCrateEmptyThin;
