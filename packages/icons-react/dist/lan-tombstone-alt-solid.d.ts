import React from 'react';

export interface LanTombstoneAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTombstoneAltSolid: React.FC<LanTombstoneAltSolidProps>;
export default LanTombstoneAltSolid;
