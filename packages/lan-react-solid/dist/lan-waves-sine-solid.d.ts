import React from 'react';

export interface LanWavesSineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWavesSineSolid(props: LanWavesSineSolidProps): React.ReactElement;
export default LanWavesSineSolid;
