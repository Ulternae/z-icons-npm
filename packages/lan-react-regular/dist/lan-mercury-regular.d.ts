import React from 'react';

export interface LanMercuryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMercuryRegular(props: LanMercuryRegularProps): React.ReactElement;
export default LanMercuryRegular;
