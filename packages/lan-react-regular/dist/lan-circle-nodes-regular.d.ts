import React from 'react';

export interface LanCircleNodesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNodesRegular(props: LanCircleNodesRegularProps): React.ReactElement;
export default LanCircleNodesRegular;
