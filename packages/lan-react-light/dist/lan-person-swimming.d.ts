import React from 'react';

export interface LanPersonSwimmingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimming(props: LanPersonSwimmingProps): React.ReactElement;
export default LanPersonSwimming;
