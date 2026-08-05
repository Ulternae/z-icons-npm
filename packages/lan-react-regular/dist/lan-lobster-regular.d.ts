import React from 'react';

export interface LanLobsterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLobsterRegular(props: LanLobsterRegularProps): React.ReactElement;
export default LanLobsterRegular;
