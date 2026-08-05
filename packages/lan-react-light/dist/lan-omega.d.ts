import React from 'react';

export interface LanOmegaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmega(props: LanOmegaProps): React.ReactElement;
export default LanOmega;
