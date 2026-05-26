import React from 'react';

export interface LanVestPatchesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVestPatchesRegular: React.FC<LanVestPatchesRegularProps>;
export default LanVestPatchesRegular;
