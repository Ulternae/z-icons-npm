import React from 'react';

export interface LanPeanutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanutRegular(props: LanPeanutRegularProps): React.ReactElement;
export default LanPeanutRegular;
