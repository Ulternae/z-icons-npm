import React from 'react';

export interface LanIdBadgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIdBadgeRegular(props: LanIdBadgeRegularProps): React.ReactElement;
export default LanIdBadgeRegular;
