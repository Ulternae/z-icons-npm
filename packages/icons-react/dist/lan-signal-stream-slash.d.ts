import React from 'react';

export interface LanSignalStreamSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalStreamSlash: React.FC<LanSignalStreamSlashProps>;
export default LanSignalStreamSlash;
