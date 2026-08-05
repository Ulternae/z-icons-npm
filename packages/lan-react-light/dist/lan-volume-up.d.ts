import React from 'react';

export interface LanVolumeUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeUp(props: LanVolumeUpProps): React.ReactElement;
export default LanVolumeUp;
