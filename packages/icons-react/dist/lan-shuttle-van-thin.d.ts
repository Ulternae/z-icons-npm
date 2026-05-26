import React from 'react';

export interface LanShuttleVanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleVanThin: React.FC<LanShuttleVanThinProps>;
export default LanShuttleVanThin;
