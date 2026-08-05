import React from 'react';

export interface LanBrailleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrailleSolid(props: LanBrailleSolidProps): React.ReactElement;
export default LanBrailleSolid;
