import React from 'react';

export interface LanPantiesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantiesRegular(props: LanPantiesRegularProps): React.ReactElement;
export default LanPantiesRegular;
