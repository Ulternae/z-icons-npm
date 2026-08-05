import React from 'react';

export interface LanBanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanRegular(props: LanBanRegularProps): React.ReactElement;
export default LanBanRegular;
