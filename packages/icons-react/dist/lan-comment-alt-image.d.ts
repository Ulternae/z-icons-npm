import React from 'react';

export interface LanCommentAltImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltImage: React.FC<LanCommentAltImageProps>;
export default LanCommentAltImage;
