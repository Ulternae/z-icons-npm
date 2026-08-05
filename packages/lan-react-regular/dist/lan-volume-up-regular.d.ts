import React from 'react';

export interface LanVolumeUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeUpRegular(props: LanVolumeUpRegularProps): React.ReactElement;
export default LanVolumeUpRegular;
