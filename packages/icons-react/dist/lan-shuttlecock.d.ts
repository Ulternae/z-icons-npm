import React from 'react';

export interface LanShuttlecockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttlecock: React.FC<LanShuttlecockProps>;
export default LanShuttlecock;
