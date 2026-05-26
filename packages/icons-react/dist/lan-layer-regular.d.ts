import React from 'react';

export interface LanLayerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerRegular: React.FC<LanLayerRegularProps>;
export default LanLayerRegular;
