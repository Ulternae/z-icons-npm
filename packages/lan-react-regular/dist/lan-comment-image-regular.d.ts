import React from 'react';

export interface LanCommentImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentImageRegular(props: LanCommentImageRegularProps): React.ReactElement;
export default LanCommentImageRegular;
