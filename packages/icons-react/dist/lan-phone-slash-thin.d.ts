import React from 'react';

export interface LanPhoneSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSlashThin: React.FC<LanPhoneSlashThinProps>;
export default LanPhoneSlashThin;
