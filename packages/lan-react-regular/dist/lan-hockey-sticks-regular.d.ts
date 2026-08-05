import React from 'react';

export interface LanHockeySticksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeySticksRegular(props: LanHockeySticksRegularProps): React.ReactElement;
export default LanHockeySticksRegular;
