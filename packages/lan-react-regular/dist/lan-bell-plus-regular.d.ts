import React from 'react';

export interface LanBellPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellPlusRegular(props: LanBellPlusRegularProps): React.ReactElement;
export default LanBellPlusRegular;
