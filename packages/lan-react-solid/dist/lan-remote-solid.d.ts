import React from 'react';

export interface LanRemoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRemoteSolid(props: LanRemoteSolidProps): React.ReactElement;
export default LanRemoteSolid;
