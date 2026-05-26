import React from 'react';

export interface LanPhoneXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneXmark: React.FC<LanPhoneXmarkProps>;
export default LanPhoneXmark;
