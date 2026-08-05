import React from 'react';

export interface LanFileOdfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileOdfRegular(props: LanFileOdfRegularProps): React.ReactElement;
export default LanFileOdfRegular;
