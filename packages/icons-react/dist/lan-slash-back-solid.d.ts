import React from 'react';

export interface LanSlashBackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashBackSolid: React.FC<LanSlashBackSolidProps>;
export default LanSlashBackSolid;
