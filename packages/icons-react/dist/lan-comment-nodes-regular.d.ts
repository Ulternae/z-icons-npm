import React from 'react';

export interface LanCommentNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentNodesRegular: React.FC<LanCommentNodesRegularProps>;
export default LanCommentNodesRegular;
