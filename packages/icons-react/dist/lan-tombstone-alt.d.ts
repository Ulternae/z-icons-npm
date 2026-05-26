import React from 'react';

export interface LanTombstoneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstoneAlt: React.FC<LanTombstoneAltProps>;
export default LanTombstoneAlt;
