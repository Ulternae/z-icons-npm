import React from 'react';

export interface LanTombstoneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstoneAltThin: React.FC<LanTombstoneAltThinProps>;
export default LanTombstoneAltThin;
