import React from 'react';

export interface LanVolumeOffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeOffThin(props: LanVolumeOffThinProps): React.ReactElement;
export default LanVolumeOffThin;
