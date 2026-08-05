import React from 'react';

export interface LanWaveSineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSineSolid(props: LanWaveSineSolidProps): React.ReactElement;
export default LanWaveSineSolid;
