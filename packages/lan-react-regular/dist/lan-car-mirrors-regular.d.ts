import React from 'react';

export interface LanCarMirrorsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarMirrorsRegular(props: LanCarMirrorsRegularProps): React.ReactElement;
export default LanCarMirrorsRegular;
