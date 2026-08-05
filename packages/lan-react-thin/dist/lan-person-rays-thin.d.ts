import React from 'react';

export interface LanPersonRaysThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRaysThin(props: LanPersonRaysThinProps): React.ReactElement;
export default LanPersonRaysThin;
