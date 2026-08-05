import React from 'react';

export interface LanBinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinSolid(props: LanBinSolidProps): React.ReactElement;
export default LanBinSolid;
