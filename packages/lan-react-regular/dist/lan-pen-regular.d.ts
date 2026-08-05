import React from 'react';

export interface LanPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenRegular(props: LanPenRegularProps): React.ReactElement;
export default LanPenRegular;
