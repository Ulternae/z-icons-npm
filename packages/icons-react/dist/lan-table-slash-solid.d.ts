import React from 'react';

export interface LanTableSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableSlashSolid: React.FC<LanTableSlashSolidProps>;
export default LanTableSlashSolid;
