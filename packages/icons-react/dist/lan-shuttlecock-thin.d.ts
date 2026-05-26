import React from 'react';

export interface LanShuttlecockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttlecockThin: React.FC<LanShuttlecockThinProps>;
export default LanShuttlecockThin;
