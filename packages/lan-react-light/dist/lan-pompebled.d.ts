import React from 'react';

export interface LanPompebledProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPompebled(props: LanPompebledProps): React.ReactElement;
export default LanPompebled;
