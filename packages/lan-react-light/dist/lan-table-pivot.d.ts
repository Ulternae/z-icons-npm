import React from 'react';

export interface LanTablePivotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePivot(props: LanTablePivotProps): React.ReactElement;
export default LanTablePivot;
