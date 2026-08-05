import React from 'react';

export interface LanCommentLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentLinesSolid(props: LanCommentLinesSolidProps): React.ReactElement;
export default LanCommentLinesSolid;
