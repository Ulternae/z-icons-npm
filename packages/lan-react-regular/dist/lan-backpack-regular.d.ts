import React from 'react';

export interface LanBackpackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackpackRegular(props: LanBackpackRegularProps): React.ReactElement;
export default LanBackpackRegular;
