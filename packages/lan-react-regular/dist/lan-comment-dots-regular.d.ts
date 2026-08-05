import React from 'react';

export interface LanCommentDotsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDotsRegular(props: LanCommentDotsRegularProps): React.ReactElement;
export default LanCommentDotsRegular;
