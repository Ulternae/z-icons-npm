import React from 'react';

export interface LanVolumeOffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeOffRegular(props: LanVolumeOffRegularProps): React.ReactElement;
export default LanVolumeOffRegular;
