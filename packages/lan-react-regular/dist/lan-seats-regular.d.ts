import React from 'react';

export interface LanSeatsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatsRegular(props: LanSeatsRegularProps): React.ReactElement;
export default LanSeatsRegular;
