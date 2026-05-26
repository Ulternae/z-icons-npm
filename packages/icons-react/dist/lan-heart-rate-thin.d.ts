import React from 'react';

export interface LanHeartRateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartRateThin: React.FC<LanHeartRateThinProps>;
export default LanHeartRateThin;
