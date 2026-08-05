import React from 'react';

export interface LanRemoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRemoteRegular(props: LanRemoteRegularProps): React.ReactElement;
export default LanRemoteRegular;
