import React from 'react';

export interface LanTableRowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsRegular(props: LanTableRowsRegularProps): React.ReactElement;
export default LanTableRowsRegular;
