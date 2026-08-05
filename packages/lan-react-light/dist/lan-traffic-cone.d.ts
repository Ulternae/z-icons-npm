import React from 'react';

export interface LanTrafficConeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficCone(props: LanTrafficConeProps): React.ReactElement;
export default LanTrafficCone;
