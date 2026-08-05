import React from 'react';

export interface LanSignal2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal2Solid(props: LanSignal2SolidProps): React.ReactElement;
export default LanSignal2Solid;
