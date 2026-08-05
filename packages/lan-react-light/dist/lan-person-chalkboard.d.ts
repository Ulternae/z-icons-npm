import React from 'react';

export interface LanPersonChalkboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonChalkboard(props: LanPersonChalkboardProps): React.ReactElement;
export default LanPersonChalkboard;
