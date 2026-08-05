import React from 'react';

export interface LanFaceSmirkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmirkingSolid(props: LanFaceSmirkingSolidProps): React.ReactElement;
export default LanFaceSmirkingSolid;
