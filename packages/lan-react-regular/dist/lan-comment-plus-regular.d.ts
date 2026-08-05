import React from 'react';

export interface LanCommentPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPlusRegular(props: LanCommentPlusRegularProps): React.ReactElement;
export default LanCommentPlusRegular;
