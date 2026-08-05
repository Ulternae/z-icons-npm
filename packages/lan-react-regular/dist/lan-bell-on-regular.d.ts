import React from 'react';

export interface LanBellOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellOnRegular(props: LanBellOnRegularProps): React.ReactElement;
export default LanBellOnRegular;
