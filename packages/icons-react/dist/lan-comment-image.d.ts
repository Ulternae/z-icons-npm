import React from 'react';

export interface LanCommentImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentImage: React.FC<LanCommentImageProps>;
export default LanCommentImage;
