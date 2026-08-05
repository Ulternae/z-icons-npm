import React from 'react';

export interface LanSportsballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSportsballRegular(props: LanSportsballRegularProps): React.ReactElement;
export default LanSportsballRegular;
