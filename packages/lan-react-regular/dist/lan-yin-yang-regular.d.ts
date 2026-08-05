import React from 'react';

export interface LanYinYangRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanYinYangRegular(props: LanYinYangRegularProps): React.ReactElement;
export default LanYinYangRegular;
