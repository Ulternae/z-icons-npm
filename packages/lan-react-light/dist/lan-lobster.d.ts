import React from 'react';

export interface LanLobsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLobster(props: LanLobsterProps): React.ReactElement;
export default LanLobster;
