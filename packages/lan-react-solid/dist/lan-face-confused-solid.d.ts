import React from 'react';

export interface LanFaceConfusedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceConfusedSolid(props: LanFaceConfusedSolidProps): React.ReactElement;
export default LanFaceConfusedSolid;
