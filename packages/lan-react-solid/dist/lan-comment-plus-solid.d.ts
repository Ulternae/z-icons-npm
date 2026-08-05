import React from 'react';

export interface LanCommentPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPlusSolid(props: LanCommentPlusSolidProps): React.ReactElement;
export default LanCommentPlusSolid;
