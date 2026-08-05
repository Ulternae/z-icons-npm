import React from 'react';

export interface LanBadgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeRegular(props: LanBadgeRegularProps): React.ReactElement;
export default LanBadgeRegular;
