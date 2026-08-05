import React from 'react';

export interface LanCommentCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCheckSolid(props: LanCommentCheckSolidProps): React.ReactElement;
export default LanCommentCheckSolid;
