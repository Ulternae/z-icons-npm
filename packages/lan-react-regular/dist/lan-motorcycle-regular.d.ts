import React from 'react';

export interface LanMotorcycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMotorcycleRegular(props: LanMotorcycleRegularProps): React.ReactElement;
export default LanMotorcycleRegular;
