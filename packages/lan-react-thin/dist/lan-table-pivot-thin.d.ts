import React from 'react';

export interface LanTablePivotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePivotThin(props: LanTablePivotThinProps): React.ReactElement;
export default LanTablePivotThin;
