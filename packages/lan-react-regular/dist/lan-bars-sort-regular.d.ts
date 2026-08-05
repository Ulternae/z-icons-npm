import React from 'react';

export interface LanBarsSortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsSortRegular(props: LanBarsSortRegularProps): React.ReactElement;
export default LanBarsSortRegular;
