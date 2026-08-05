import React from 'react';

export interface LanCommentTextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTextRegular(props: LanCommentTextRegularProps): React.ReactElement;
export default LanCommentTextRegular;
