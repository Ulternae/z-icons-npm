import React from 'react';

export interface LanBarsFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsFilterSolid(props: LanBarsFilterSolidProps): React.ReactElement;
export default LanBarsFilterSolid;
