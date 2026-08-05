import React from 'react';

export interface LanCommentImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentImageSolid(props: LanCommentImageSolidProps): React.ReactElement;
export default LanCommentImageSolid;
