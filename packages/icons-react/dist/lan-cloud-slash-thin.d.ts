import React from 'react';

export interface LanCloudSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudSlashThin: React.FC<LanCloudSlashThinProps>;
export default LanCloudSlashThin;
