import React from 'react';

export interface LanTablePivotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePivotSolid(props: LanTablePivotSolidProps): React.ReactElement;
export default LanTablePivotSolid;
