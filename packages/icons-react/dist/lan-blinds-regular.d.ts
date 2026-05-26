import React from 'react';

export interface LanBlindsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsRegular: React.FC<LanBlindsRegularProps>;
export default LanBlindsRegular;
