import React from 'react';

export interface LanShieldSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldSlashSolid: React.FC<LanShieldSlashSolidProps>;
export default LanShieldSlashSolid;
