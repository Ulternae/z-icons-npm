import React from 'react';

export interface LanForkliftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForkliftThin: React.FC<LanForkliftThinProps>;
export default LanForkliftThin;
