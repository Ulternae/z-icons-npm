import React from 'react';

export interface LanVolumeOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeOffSolid(props: LanVolumeOffSolidProps): React.ReactElement;
export default LanVolumeOffSolid;
