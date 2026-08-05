import React from 'react';

export interface LanAbacusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAbacusSolid(props: LanAbacusSolidProps): React.ReactElement;
export default LanAbacusSolid;
