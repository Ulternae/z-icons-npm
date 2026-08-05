import React from 'react';

export interface LanLayerGroupMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupMinusRegular(props: LanLayerGroupMinusRegularProps): React.ReactElement;
export default LanLayerGroupMinusRegular;
