import React from 'react';

export interface LanSyncAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSyncAlt: React.FC<LanSyncAltProps>;
export default LanSyncAlt;
