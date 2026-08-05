import React from 'react';

export interface LanRecycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecycleRegular(props: LanRecycleRegularProps): React.ReactElement;
export default LanRecycleRegular;
