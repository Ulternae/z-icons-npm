import React from 'react';

export interface LanPhoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSlash: React.FC<LanPhoneSlashProps>;
export default LanPhoneSlash;
