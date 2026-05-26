import React from 'react';

export interface LanSyncAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSyncAltThin: React.FC<LanSyncAltThinProps>;
export default LanSyncAltThin;
