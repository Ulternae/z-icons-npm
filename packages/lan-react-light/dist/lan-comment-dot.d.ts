import React from 'react';

export interface LanCommentDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDot(props: LanCommentDotProps): React.ReactElement;
export default LanCommentDot;
