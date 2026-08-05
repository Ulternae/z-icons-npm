import React from 'react';

export interface LanVolumeUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeUpSolid(props: LanVolumeUpSolidProps): React.ReactElement;
export default LanVolumeUpSolid;
