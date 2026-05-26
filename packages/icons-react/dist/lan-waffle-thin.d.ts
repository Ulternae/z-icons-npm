import React from 'react';

export interface LanWaffleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaffleThin: React.FC<LanWaffleThinProps>;
export default LanWaffleThin;
