import React from 'react';

export interface LanFaceUnamusedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceUnamusedSolid(props: LanFaceUnamusedSolidProps): React.ReactElement;
export default LanFaceUnamusedSolid;
