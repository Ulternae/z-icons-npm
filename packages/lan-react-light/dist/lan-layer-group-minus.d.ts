import React from 'react';

export interface LanLayerGroupMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupMinus(props: LanLayerGroupMinusProps): React.ReactElement;
export default LanLayerGroupMinus;
