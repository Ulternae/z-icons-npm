import React from 'react';

export interface LanCommentLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentLinesRegular(props: LanCommentLinesRegularProps): React.ReactElement;
export default LanCommentLinesRegular;
