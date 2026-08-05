import React from 'react';

export interface LanTablePivotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTablePivotRegular(props: LanTablePivotRegularProps): React.ReactElement;
export default LanTablePivotRegular;
