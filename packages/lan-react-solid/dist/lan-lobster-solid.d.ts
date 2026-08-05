import React from 'react';

export interface LanLobsterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLobsterSolid(props: LanLobsterSolidProps): React.ReactElement;
export default LanLobsterSolid;
