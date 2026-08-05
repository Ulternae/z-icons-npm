import React from 'react';

export interface LanVolumeUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeUpThin(props: LanVolumeUpThinProps): React.ReactElement;
export default LanVolumeUpThin;
