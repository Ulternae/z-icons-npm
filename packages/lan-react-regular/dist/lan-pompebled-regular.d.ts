import React from 'react';

export interface LanPompebledRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPompebledRegular(props: LanPompebledRegularProps): React.ReactElement;
export default LanPompebledRegular;
