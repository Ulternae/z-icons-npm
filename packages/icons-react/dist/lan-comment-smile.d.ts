import React from 'react';

export interface LanCommentSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmile: React.FC<LanCommentSmileProps>;
export default LanCommentSmile;
