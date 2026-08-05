import React from 'react';

export interface LanCommentMiddleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMiddleRegular(props: LanCommentMiddleRegularProps): React.ReactElement;
export default LanCommentMiddleRegular;
