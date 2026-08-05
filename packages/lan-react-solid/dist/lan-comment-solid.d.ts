import React from 'react';

export interface LanCommentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSolid(props: LanCommentSolidProps): React.ReactElement;
export default LanCommentSolid;
