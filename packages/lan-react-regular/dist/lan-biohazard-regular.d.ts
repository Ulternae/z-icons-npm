import React from 'react';

export interface LanBiohazardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBiohazardRegular(props: LanBiohazardRegularProps): React.ReactElement;
export default LanBiohazardRegular;
