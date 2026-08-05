import React from 'react';

export interface LanCommentCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCheckRegular(props: LanCommentCheckRegularProps): React.ReactElement;
export default LanCommentCheckRegular;
