import React from 'react';

export interface LanPersonDiggingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDiggingRegular(props: LanPersonDiggingRegularProps): React.ReactElement;
export default LanPersonDiggingRegular;
