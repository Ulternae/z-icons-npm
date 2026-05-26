import React from 'react';

export interface LanLayerGroupPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupPlusRegular: React.FC<LanLayerGroupPlusRegularProps>;
export default LanLayerGroupPlusRegular;
