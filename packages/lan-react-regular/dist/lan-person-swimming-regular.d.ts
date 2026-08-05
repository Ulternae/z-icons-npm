import React from 'react';

export interface LanPersonSwimmingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingRegular(props: LanPersonSwimmingRegularProps): React.ReactElement;
export default LanPersonSwimmingRegular;
