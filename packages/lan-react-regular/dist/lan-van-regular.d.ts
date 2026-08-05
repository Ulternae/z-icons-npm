import React from 'react';

export interface LanVanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVanRegular(props: LanVanRegularProps): React.ReactElement;
export default LanVanRegular;
