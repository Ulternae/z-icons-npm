import React from 'react';

export interface LanTextSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSlashSolid: React.FC<LanTextSlashSolidProps>;
export default LanTextSlashSolid;
