import React from 'react';

export interface LanLayerGroupMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupMinusRegular: React.FC<LanLayerGroupMinusRegularProps>;
export default LanLayerGroupMinusRegular;
