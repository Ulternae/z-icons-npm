import React from 'react';

export interface LanBlanketFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanketFireSolid(props: LanBlanketFireSolidProps): React.ReactElement;
export default LanBlanketFireSolid;
