import React from 'react';

export interface LanPenRulerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenRulerRegular(props: LanPenRulerRegularProps): React.ReactElement;
export default LanPenRulerRegular;
