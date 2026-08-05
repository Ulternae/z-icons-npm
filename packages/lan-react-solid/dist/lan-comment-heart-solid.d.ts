import React from 'react';

export interface LanCommentHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentHeartSolid(props: LanCommentHeartSolidProps): React.ReactElement;
export default LanCommentHeartSolid;
