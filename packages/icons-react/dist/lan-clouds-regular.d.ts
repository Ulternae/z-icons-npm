import React from 'react';

export interface LanCloudsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsRegular: React.FC<LanCloudsRegularProps>;
export default LanCloudsRegular;
