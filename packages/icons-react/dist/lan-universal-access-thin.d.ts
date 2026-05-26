import React from 'react';

export interface LanUniversalAccessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUniversalAccessThin: React.FC<LanUniversalAccessThinProps>;
export default LanUniversalAccessThin;
