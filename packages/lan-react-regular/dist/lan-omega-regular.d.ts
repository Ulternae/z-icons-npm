import React from 'react';

export interface LanOmegaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOmegaRegular(props: LanOmegaRegularProps): React.ReactElement;
export default LanOmegaRegular;
