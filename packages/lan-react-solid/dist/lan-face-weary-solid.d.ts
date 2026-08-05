import React from 'react';

export interface LanFaceWearySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWearySolid(props: LanFaceWearySolidProps): React.ReactElement;
export default LanFaceWearySolid;
