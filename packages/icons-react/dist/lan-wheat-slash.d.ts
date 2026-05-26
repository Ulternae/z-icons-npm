import React from 'react';

export interface LanWheatSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheatSlash: React.FC<LanWheatSlashProps>;
export default LanWheatSlash;
