import React from 'react';

export interface LanHotdogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotdogRegular(props: LanHotdogRegularProps): React.ReactElement;
export default LanHotdogRegular;
