import React from 'react';

export interface LanShuttleSpaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleSpaceSolid(props: LanShuttleSpaceSolidProps): React.ReactElement;
export default LanShuttleSpaceSolid;
