import React from 'react';

export interface LanCommentImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentImage(props: LanCommentImageProps): React.ReactElement;
export default LanCommentImage;
