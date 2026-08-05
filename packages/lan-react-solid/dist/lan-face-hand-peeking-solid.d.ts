import React from 'react';

export interface LanFaceHandPeekingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHandPeekingSolid(props: LanFaceHandPeekingSolidProps): React.ReactElement;
export default LanFaceHandPeekingSolid;
