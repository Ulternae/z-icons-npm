import React from 'react';

export interface LanFaceViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceViewfinderSolid(props: LanFaceViewfinderSolidProps): React.ReactElement;
export default LanFaceViewfinderSolid;
