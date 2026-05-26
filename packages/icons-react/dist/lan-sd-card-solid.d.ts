import React from 'react';

export interface LanSdCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCardSolid: React.FC<LanSdCardSolidProps>;
export default LanSdCardSolid;
