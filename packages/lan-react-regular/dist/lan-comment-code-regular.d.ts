import React from 'react';

export interface LanCommentCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCodeRegular(props: LanCommentCodeRegularProps): React.ReactElement;
export default LanCommentCodeRegular;
