import React from 'react';

export interface LanCommentCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCheck(props: LanCommentCheckProps): React.ReactElement;
export default LanCommentCheck;
