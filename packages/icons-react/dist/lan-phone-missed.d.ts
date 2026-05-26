import React from 'react';

export interface LanPhoneMissedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneMissed: React.FC<LanPhoneMissedProps>;
export default LanPhoneMissed;
