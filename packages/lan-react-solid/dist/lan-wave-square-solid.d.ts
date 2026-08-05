import React from 'react';

export interface LanWaveSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSquareSolid(props: LanWaveSquareSolidProps): React.ReactElement;
export default LanWaveSquareSolid;
