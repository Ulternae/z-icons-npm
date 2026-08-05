import React from 'react';

export interface LanBagelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagelSolid(props: LanBagelSolidProps): React.ReactElement;
export default LanBagelSolid;
