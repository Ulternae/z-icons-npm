import React from 'react';

export interface LanCommentCaptionsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCaptionsSolid(props: LanCommentCaptionsSolidProps): React.ReactElement;
export default LanCommentCaptionsSolid;
