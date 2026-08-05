import React from 'react';

export interface LanFrancSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrancSignRegular(props: LanFrancSignRegularProps): React.ReactElement;
export default LanFrancSignRegular;
