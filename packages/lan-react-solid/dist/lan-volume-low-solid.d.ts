import React from 'react';

export interface LanVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeLowSolid(props: LanVolumeLowSolidProps): React.ReactElement;
export default LanVolumeLowSolid;
