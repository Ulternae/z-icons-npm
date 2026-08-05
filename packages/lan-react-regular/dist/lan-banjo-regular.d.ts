import React from 'react';

export interface LanBanjoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanjoRegular(props: LanBanjoRegularProps): React.ReactElement;
export default LanBanjoRegular;
