import React from 'react';

export interface LanWaterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaterRegular(props: LanWaterRegularProps): React.ReactElement;
export default LanWaterRegular;
