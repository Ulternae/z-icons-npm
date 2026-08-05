import React from 'react';

export interface LanCommentTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTimesSolid(props: LanCommentTimesSolidProps): React.ReactElement;
export default LanCommentTimesSolid;
