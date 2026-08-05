import React from 'react';

export interface LanBuoyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoyRegular(props: LanBuoyRegularProps): React.ReactElement;
export default LanBuoyRegular;
