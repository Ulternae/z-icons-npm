import React from 'react';

export interface LanDownUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownUpRegular: React.FC<LanDownUpRegularProps>;
export default LanDownUpRegular;
