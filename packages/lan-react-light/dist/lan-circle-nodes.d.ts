import React from 'react';

export interface LanCircleNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNodes(props: LanCircleNodesProps): React.ReactElement;
export default LanCircleNodes;
