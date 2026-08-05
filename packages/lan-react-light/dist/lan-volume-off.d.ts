import React from 'react';

export interface LanVolumeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeOff(props: LanVolumeOffProps): React.ReactElement;
export default LanVolumeOff;
