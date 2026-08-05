import React from 'react';

export interface LanWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSolid(props: LanWaveSolidProps): React.ReactElement;
export default LanWaveSolid;
