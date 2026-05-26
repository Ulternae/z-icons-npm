import React from 'react';

export interface LanMobilePhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobilePhoneThin: React.FC<LanMobilePhoneThinProps>;
export default LanMobilePhoneThin;
