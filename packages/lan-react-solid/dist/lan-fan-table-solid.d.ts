import React from 'react';

export interface LanFanTableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanTableSolid(props: LanFanTableSolidProps): React.ReactElement;
export default LanFanTableSolid;
