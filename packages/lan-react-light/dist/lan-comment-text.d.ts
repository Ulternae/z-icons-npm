import React from 'react';

export interface LanCommentTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentText(props: LanCommentTextProps): React.ReactElement;
export default LanCommentText;
