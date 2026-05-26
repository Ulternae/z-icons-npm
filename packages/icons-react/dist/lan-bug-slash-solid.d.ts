import React from 'react';

export interface LanBugSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugSlashSolid: React.FC<LanBugSlashSolidProps>;
export default LanBugSlashSolid;
