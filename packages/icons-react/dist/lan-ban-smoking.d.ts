import React from 'react';

export interface LanBanSmokingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanSmoking: React.FC<LanBanSmokingProps>;
export default LanBanSmoking;
