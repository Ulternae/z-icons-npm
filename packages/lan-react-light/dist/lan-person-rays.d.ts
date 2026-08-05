import React from 'react';

export interface LanPersonRaysProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRays(props: LanPersonRaysProps): React.ReactElement;
export default LanPersonRays;
