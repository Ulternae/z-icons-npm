import React from 'react';

export interface LanCommentNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentNodes(props: LanCommentNodesProps): React.ReactElement;
export default LanCommentNodes;
