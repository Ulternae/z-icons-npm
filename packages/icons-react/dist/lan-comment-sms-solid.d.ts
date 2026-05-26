import React from 'react';

export interface LanCommentSmsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmsSolid: React.FC<LanCommentSmsSolidProps>;
export default LanCommentSmsSolid;
