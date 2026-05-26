import React from 'react';

export interface LanShuttleSpaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpace: React.FC<LanShuttleSpaceProps>;
export default LanShuttleSpace;
