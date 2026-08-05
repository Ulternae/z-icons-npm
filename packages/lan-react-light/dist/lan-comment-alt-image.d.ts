import React from 'react';

export interface LanCommentAltImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltImage(props: LanCommentAltImageProps): React.ReactElement;
export default LanCommentAltImage;
