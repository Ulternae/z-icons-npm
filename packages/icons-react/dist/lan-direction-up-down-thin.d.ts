import React from 'react';

export interface LanDirectionUpDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDirectionUpDownThin: React.FC<LanDirectionUpDownThinProps>;
export default LanDirectionUpDownThin;
