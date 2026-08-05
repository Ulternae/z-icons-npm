import React from 'react';

export interface LanTrophyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrophyRegular(props: LanTrophyRegularProps): React.ReactElement;
export default LanTrophyRegular;
