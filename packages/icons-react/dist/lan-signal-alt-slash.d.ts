import React from 'react';

export interface LanSignalAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignalAltSlash: React.FC<LanSignalAltSlashProps>;
export default LanSignalAltSlash;
