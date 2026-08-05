import React from 'react';

export interface LanHeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeatRegular(props: LanHeatRegularProps): React.ReactElement;
export default LanHeatRegular;
