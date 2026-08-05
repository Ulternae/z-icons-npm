import React from 'react';

export interface LanCommentAltLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltLines(props: LanCommentAltLinesProps): React.ReactElement;
export default LanCommentAltLines;
