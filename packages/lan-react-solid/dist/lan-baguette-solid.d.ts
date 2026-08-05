import React from 'react';

export interface LanBaguetteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaguetteSolid(props: LanBaguetteSolidProps): React.ReactElement;
export default LanBaguetteSolid;
