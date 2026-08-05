import React from 'react';

export interface LanPenLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenLineRegular(props: LanPenLineRegularProps): React.ReactElement;
export default LanPenLineRegular;
