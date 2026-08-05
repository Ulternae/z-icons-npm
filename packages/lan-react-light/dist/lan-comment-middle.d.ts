import React from 'react';

export interface LanCommentMiddleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMiddle(props: LanCommentMiddleProps): React.ReactElement;
export default LanCommentMiddle;
