import React from 'react';

export interface LanShuttleSpaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceSolid: React.FC<LanShuttleSpaceSolidProps>;
export default LanShuttleSpaceSolid;
