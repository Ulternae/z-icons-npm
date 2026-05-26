import React from 'react';

export interface LanCloudSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSlashSolid: React.FC<LanCloudSlashSolidProps>;
export default LanCloudSlashSolid;
