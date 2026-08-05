import React from 'react';

export interface LanSignal3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal3Solid(props: LanSignal3SolidProps): React.ReactElement;
export default LanSignal3Solid;
