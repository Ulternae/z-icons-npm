import React from 'react';

export interface LanCommentMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMinus(props: LanCommentMinusProps): React.ReactElement;
export default LanCommentMinus;
