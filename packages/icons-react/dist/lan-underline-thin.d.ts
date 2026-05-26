import React from 'react';

export interface LanUnderlineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnderlineThin: React.FC<LanUnderlineThinProps>;
export default LanUnderlineThin;
