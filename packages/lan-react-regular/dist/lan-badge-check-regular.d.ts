import React from 'react';

export interface LanBadgeCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeCheckRegular(props: LanBadgeCheckRegularProps): React.ReactElement;
export default LanBadgeCheckRegular;
