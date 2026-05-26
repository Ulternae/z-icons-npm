import React from 'react';

export interface LanLobsterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLobsterThin: React.FC<LanLobsterThinProps>;
export default LanLobsterThin;
