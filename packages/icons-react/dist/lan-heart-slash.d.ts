import React from 'react';

export interface LanHeartSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartSlash: React.FC<LanHeartSlashProps>;
export default LanHeartSlash;
