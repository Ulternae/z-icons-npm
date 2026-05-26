import React from 'react';

export interface LanPhoneSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSquareThin: React.FC<LanPhoneSquareThinProps>;
export default LanPhoneSquareThin;
