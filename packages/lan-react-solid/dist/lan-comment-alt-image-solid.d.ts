import React from 'react';

export interface LanCommentAltImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltImageSolid(props: LanCommentAltImageSolidProps): React.ReactElement;
export default LanCommentAltImageSolid;
