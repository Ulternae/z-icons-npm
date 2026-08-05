import React from 'react';

export interface LanCommentAltImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltImageRegular(props: LanCommentAltImageRegularProps): React.ReactElement;
export default LanCommentAltImageRegular;
