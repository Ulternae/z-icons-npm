import React from 'react';

export interface LanBillboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBillboardRegular(props: LanBillboardRegularProps): React.ReactElement;
export default LanBillboardRegular;
