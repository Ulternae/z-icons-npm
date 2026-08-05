import React from 'react';

export interface LanPenSwirlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSwirlRegular(props: LanPenSwirlRegularProps): React.ReactElement;
export default LanPenSwirlRegular;
