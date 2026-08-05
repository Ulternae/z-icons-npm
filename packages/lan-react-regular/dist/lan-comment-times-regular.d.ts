import React from 'react';

export interface LanCommentTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTimesRegular(props: LanCommentTimesRegularProps): React.ReactElement;
export default LanCommentTimesRegular;
