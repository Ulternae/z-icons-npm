import React from 'react';

export interface LanCommentAltDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltDots(props: LanCommentAltDotsProps): React.ReactElement;
export default LanCommentAltDots;
