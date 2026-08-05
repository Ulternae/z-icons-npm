import React from 'react';

export interface LanPersonChalkboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonChalkboardThin(props: LanPersonChalkboardThinProps): React.ReactElement;
export default LanPersonChalkboardThin;
