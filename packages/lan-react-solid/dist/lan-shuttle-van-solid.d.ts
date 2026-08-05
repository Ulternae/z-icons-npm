import React from 'react';

export interface LanShuttleVanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttleVanSolid(props: LanShuttleVanSolidProps): React.ReactElement;
export default LanShuttleVanSolid;
