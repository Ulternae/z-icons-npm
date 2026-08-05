import React from 'react';

export interface LanLobsterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLobsterThin(props: LanLobsterThinProps): React.ReactElement;
export default LanLobsterThin;
