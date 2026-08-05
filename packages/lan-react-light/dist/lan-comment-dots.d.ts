import React from 'react';

export interface LanCommentDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDots(props: LanCommentDotsProps): React.ReactElement;
export default LanCommentDots;
