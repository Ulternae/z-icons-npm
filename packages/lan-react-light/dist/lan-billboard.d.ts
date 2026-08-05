import React from 'react';

export interface LanBillboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBillboard(props: LanBillboardProps): React.ReactElement;
export default LanBillboard;
