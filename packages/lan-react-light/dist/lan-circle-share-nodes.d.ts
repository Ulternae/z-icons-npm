import React from 'react';

export interface LanCircleShareNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShareNodes(props: LanCircleShareNodesProps): React.ReactElement;
export default LanCircleShareNodes;
