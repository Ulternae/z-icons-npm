import React from 'react';

export interface LanUserViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserViewfinderRegular(props: LanUserViewfinderRegularProps): React.ReactElement;
export default LanUserViewfinderRegular;
