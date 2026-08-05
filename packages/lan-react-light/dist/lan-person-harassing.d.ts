import React from 'react';

export interface LanPersonHarassingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonHarassing(props: LanPersonHarassingProps): React.ReactElement;
export default LanPersonHarassing;
