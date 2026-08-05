import React from 'react';

export interface LanMugSaucerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugSaucerRegular(props: LanMugSaucerRegularProps): React.ReactElement;
export default LanMugSaucerRegular;
