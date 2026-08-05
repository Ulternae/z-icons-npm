import React from 'react';

export interface LanMaskVentilatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskVentilatorRegular(props: LanMaskVentilatorRegularProps): React.ReactElement;
export default LanMaskVentilatorRegular;
