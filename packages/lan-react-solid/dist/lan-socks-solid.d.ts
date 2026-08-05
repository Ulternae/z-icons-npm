import React from 'react';

export interface LanSocksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSocksSolid(props: LanSocksSolidProps): React.ReactElement;
export default LanSocksSolid;
