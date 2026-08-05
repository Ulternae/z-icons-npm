import React from 'react';

export interface LanPencilLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilLineRegular(props: LanPencilLineRegularProps): React.ReactElement;
export default LanPencilLineRegular;
