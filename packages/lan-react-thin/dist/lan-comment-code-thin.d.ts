import React from 'react';

export interface LanCommentCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCodeThin(props: LanCommentCodeThinProps): React.ReactElement;
export default LanCommentCodeThin;
