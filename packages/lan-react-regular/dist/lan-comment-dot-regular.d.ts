import React from 'react';

export interface LanCommentDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDotRegular(props: LanCommentDotRegularProps): React.ReactElement;
export default LanCommentDotRegular;
