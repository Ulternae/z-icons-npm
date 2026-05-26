import React from 'react';

export interface LanLoaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLoaderRegular: React.FC<LanLoaderRegularProps>;
export default LanLoaderRegular;
