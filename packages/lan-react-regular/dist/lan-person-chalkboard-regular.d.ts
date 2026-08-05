import React from 'react';

export interface LanPersonChalkboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonChalkboardRegular(props: LanPersonChalkboardRegularProps): React.ReactElement;
export default LanPersonChalkboardRegular;
