import React from 'react';

export interface LanSignal4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal4Solid(props: LanSignal4SolidProps): React.ReactElement;
export default LanSignal4Solid;
