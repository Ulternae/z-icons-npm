import React from 'react';

export interface LanHandHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHeartRegular: React.FC<LanHandHeartRegularProps>;
export default LanHandHeartRegular;
