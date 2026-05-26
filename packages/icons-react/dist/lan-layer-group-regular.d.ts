import React from 'react';

export interface LanLayerGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupRegular: React.FC<LanLayerGroupRegularProps>;
export default LanLayerGroupRegular;
