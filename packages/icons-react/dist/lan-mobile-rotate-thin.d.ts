import React from 'react';

export interface LanMobileRotateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileRotateThin: React.FC<LanMobileRotateThinProps>;
export default LanMobileRotateThin;
