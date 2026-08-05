import React from 'react';

export interface LanEllipsisVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEllipsisVRegular(props: LanEllipsisVRegularProps): React.ReactElement;
export default LanEllipsisVRegular;
