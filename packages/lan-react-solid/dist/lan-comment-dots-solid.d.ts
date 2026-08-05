import React from 'react';

export interface LanCommentDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDotsSolid(props: LanCommentDotsSolidProps): React.ReactElement;
export default LanCommentDotsSolid;
