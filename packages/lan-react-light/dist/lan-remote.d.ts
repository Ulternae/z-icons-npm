import React from 'react';

export interface LanRemoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRemote(props: LanRemoteProps): React.ReactElement;
export default LanRemote;
