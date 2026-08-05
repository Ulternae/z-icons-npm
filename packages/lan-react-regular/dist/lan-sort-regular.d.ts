import React from 'react';

export interface LanSortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortRegular(props: LanSortRegularProps): React.ReactElement;
export default LanSortRegular;
