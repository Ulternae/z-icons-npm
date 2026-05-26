import React from 'react';

export interface LanPhoneOfficeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneOfficeThin: React.FC<LanPhoneOfficeThinProps>;
export default LanPhoneOfficeThin;
