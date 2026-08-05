import React from 'react';

export interface LanVialRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialRegular(props: LanVialRegularProps): React.ReactElement;
export default LanVialRegular;
