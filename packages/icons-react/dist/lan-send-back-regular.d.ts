import React from 'react';

export interface LanSendBackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSendBackRegular: React.FC<LanSendBackRegularProps>;
export default LanSendBackRegular;
