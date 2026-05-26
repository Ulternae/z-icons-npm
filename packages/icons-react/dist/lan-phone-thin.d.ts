import React from 'react';

export interface LanPhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneThin: React.FC<LanPhoneThinProps>;
export default LanPhoneThin;
