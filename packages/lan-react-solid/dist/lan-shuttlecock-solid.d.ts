import React from 'react';

export interface LanShuttlecockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttlecockSolid(props: LanShuttlecockSolidProps): React.ReactElement;
export default LanShuttlecockSolid;
