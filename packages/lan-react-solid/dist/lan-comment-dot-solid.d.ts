import React from 'react';

export interface LanCommentDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDotSolid(props: LanCommentDotSolidProps): React.ReactElement;
export default LanCommentDotSolid;
