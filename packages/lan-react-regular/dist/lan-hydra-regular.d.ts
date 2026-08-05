import React from 'react';

export interface LanHydraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHydraRegular(props: LanHydraRegularProps): React.ReactElement;
export default LanHydraRegular;
