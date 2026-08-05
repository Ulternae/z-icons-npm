import React from 'react';

export interface LanChildRifleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildRifleRegular(props: LanChildRifleRegularProps): React.ReactElement;
export default LanChildRifleRegular;
