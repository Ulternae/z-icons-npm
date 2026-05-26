import React from 'react';

export interface LanPhoneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneAlt: React.FC<LanPhoneAltProps>;
export default LanPhoneAlt;
