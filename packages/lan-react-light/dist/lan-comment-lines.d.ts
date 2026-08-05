import React from 'react';

export interface LanCommentLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentLines(props: LanCommentLinesProps): React.ReactElement;
export default LanCommentLines;
