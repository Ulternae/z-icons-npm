import React from 'react';

export interface LanCommentNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentNodes: React.FC<LanCommentNodesProps>;
export default LanCommentNodes;
