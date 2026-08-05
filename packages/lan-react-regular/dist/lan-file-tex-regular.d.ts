import React from 'react';

export interface LanFileTexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTexRegular(props: LanFileTexRegularProps): React.ReactElement;
export default LanFileTexRegular;
