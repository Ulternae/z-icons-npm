import React from 'react';

export interface LanCircleShareNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShareNodesRegular(props: LanCircleShareNodesRegularProps): React.ReactElement;
export default LanCircleShareNodesRegular;
