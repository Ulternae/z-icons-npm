import React from 'react';

export interface LanCommentNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentNodesSolid(props: LanCommentNodesSolidProps): React.ReactElement;
export default LanCommentNodesSolid;
