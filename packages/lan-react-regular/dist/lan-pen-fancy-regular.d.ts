import React from 'react';

export interface LanPenFancyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFancyRegular(props: LanPenFancyRegularProps): React.ReactElement;
export default LanPenFancyRegular;
