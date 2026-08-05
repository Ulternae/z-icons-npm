import React from 'react';

export interface LanCommentPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPenSolid(props: LanCommentPenSolidProps): React.ReactElement;
export default LanCommentPenSolid;
