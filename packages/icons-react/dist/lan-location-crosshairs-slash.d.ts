import React from 'react';

export interface LanLocationCrosshairsSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationCrosshairsSlash: React.FC<LanLocationCrosshairsSlashProps>;
export default LanLocationCrosshairsSlash;
