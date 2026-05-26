import React from 'react';

export interface LanHeaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeaderThin: React.FC<LanHeaderThinProps>;
export default LanHeaderThin;
