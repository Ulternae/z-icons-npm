import React from 'react';

export interface LanPhonePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhonePlusThin: React.FC<LanPhonePlusThinProps>;
export default LanPhonePlusThin;
