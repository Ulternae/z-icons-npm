import React from 'react';

export interface LanCloudSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSlash: React.FC<LanCloudSlashProps>;
export default LanCloudSlash;
