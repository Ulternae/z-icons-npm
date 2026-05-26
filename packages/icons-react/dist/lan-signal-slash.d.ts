import React from 'react';

export interface LanSignalSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalSlash: React.FC<LanSignalSlashProps>;
export default LanSignalSlash;
