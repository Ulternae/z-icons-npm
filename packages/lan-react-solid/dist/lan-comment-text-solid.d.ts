import React from 'react';

export interface LanCommentTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTextSolid(props: LanCommentTextSolidProps): React.ReactElement;
export default LanCommentTextSolid;
