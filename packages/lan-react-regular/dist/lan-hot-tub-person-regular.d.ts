import React from 'react';

export interface LanHotTubPersonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotTubPersonRegular(props: LanHotTubPersonRegularProps): React.ReactElement;
export default LanHotTubPersonRegular;
