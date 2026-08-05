import React from 'react';

export interface LanFerryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFerryRegular(props: LanFerryRegularProps): React.ReactElement;
export default LanFerryRegular;
