import React from 'react';

export interface LanCommentHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentHeartRegular(props: LanCommentHeartRegularProps): React.ReactElement;
export default LanCommentHeartRegular;
