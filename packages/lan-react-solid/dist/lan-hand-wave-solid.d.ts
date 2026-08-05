import React from 'react';

export interface LanHandWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandWaveSolid(props: LanHandWaveSolidProps): React.ReactElement;
export default LanHandWaveSolid;
