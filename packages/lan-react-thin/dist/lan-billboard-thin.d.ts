import React from 'react';

export interface LanBillboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBillboardThin(props: LanBillboardThinProps): React.ReactElement;
export default LanBillboardThin;
