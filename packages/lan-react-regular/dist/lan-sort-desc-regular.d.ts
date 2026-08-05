import React from 'react';

export interface LanSortDescRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortDescRegular(props: LanSortDescRegularProps): React.ReactElement;
export default LanSortDescRegular;
