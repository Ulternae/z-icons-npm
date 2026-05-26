import React from 'react';

export interface LanShuttleVanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleVanSolid: React.FC<LanShuttleVanSolidProps>;
export default LanShuttleVanSolid;
