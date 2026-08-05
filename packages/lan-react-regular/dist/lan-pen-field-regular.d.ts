import React from 'react';

export interface LanPenFieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFieldRegular(props: LanPenFieldRegularProps): React.ReactElement;
export default LanPenFieldRegular;
