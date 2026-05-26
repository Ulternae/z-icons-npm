import React from 'react';

export interface LanLobsterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLobsterSolid: React.FC<LanLobsterSolidProps>;
export default LanLobsterSolid;
