import React from 'react';

export interface LanCommentSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmileSolid: React.FC<LanCommentSmileSolidProps>;
export default LanCommentSmileSolid;
