import React from 'react';

export interface LanCommentCaptionsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCaptionsSolid: React.FC<LanCommentCaptionsSolidProps>;
export default LanCommentCaptionsSolid;
