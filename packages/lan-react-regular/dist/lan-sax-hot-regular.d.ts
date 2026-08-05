import React from 'react';

export interface LanSaxHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxHotRegular(props: LanSaxHotRegularProps): React.ReactElement;
export default LanSaxHotRegular;
