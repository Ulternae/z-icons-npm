import React from 'react';

export interface LanCrateEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrateEmpty: React.FC<LanCrateEmptyProps>;
export default LanCrateEmpty;
