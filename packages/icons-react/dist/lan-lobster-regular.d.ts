import React from 'react';

export interface LanLobsterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLobsterRegular: React.FC<LanLobsterRegularProps>;
export default LanLobsterRegular;
