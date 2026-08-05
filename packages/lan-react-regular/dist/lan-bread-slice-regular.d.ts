import React from 'react';

export interface LanBreadSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadSliceRegular(props: LanBreadSliceRegularProps): React.ReactElement;
export default LanBreadSliceRegular;
