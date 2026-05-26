import React from 'react';

export interface LanArrowsToEyeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToEyeThin: React.FC<LanArrowsToEyeThinProps>;
export default LanArrowsToEyeThin;
