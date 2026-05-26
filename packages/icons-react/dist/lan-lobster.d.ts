import React from 'react';

export interface LanLobsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLobster: React.FC<LanLobsterProps>;
export default LanLobster;
