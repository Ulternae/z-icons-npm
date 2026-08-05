import React from 'react';

export interface LanTableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableSolid(props: LanTableSolidProps): React.ReactElement;
export default LanTableSolid;
