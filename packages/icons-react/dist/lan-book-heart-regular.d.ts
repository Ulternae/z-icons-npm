import React from 'react';

export interface LanBookHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookHeartRegular: React.FC<LanBookHeartRegularProps>;
export default LanBookHeartRegular;
