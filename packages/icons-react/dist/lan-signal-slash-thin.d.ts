import React from 'react';

export interface LanSignalSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalSlashThin: React.FC<LanSignalSlashThinProps>;
export default LanSignalSlashThin;
