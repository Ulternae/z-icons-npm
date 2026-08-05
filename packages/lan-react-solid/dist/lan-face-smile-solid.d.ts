import React from 'react';

export interface LanFaceSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileSolid(props: LanFaceSmileSolidProps): React.ReactElement;
export default LanFaceSmileSolid;
