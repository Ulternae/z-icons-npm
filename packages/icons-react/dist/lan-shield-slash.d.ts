import React from 'react';

export interface LanShieldSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldSlash: React.FC<LanShieldSlashProps>;
export default LanShieldSlash;
