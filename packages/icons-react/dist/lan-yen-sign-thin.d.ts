import React from 'react';

export interface LanYenSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYenSignThin: React.FC<LanYenSignThinProps>;
export default LanYenSignThin;
