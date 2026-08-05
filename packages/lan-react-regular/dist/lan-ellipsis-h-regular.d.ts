import React from 'react';

export interface LanEllipsisHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisHRegular(props: LanEllipsisHRegularProps): React.ReactElement;
export default LanEllipsisHRegular;
