import React from 'react';

export interface LanCommentNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentNodesRegular(props: LanCommentNodesRegularProps): React.ReactElement;
export default LanCommentNodesRegular;
