import React from 'react';

export interface LanMessageHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageHeartRegular: React.FC<LanMessageHeartRegularProps>;
export default LanMessageHeartRegular;
