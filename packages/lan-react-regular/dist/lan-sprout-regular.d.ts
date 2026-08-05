import React from 'react';

export interface LanSproutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSproutRegular(props: LanSproutRegularProps): React.ReactElement;
export default LanSproutRegular;
