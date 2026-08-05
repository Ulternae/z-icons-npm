import React from 'react';

export interface LanFaceRelievedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceRelievedSolid(props: LanFaceRelievedSolidProps): React.ReactElement;
export default LanFaceRelievedSolid;
