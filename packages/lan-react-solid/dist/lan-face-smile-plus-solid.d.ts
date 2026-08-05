import React from 'react';

export interface LanFaceSmilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmilePlusSolid(props: LanFaceSmilePlusSolidProps): React.ReactElement;
export default LanFaceSmilePlusSolid;
