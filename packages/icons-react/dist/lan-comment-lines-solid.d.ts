import React from 'react';

export interface LanCommentLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentLinesSolid: React.FC<LanCommentLinesSolidProps>;
export default LanCommentLinesSolid;
