import React from 'react';

export interface LanCommentCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCheckRegular: React.FC<LanCommentCheckRegularProps>;
export default LanCommentCheckRegular;
