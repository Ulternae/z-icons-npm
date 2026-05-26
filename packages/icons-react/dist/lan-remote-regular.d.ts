import React from 'react';

export interface LanRemoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRemoteRegular: React.FC<LanRemoteRegularProps>;
export default LanRemoteRegular;
