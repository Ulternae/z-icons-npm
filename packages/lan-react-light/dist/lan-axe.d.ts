import React from 'react';

export interface LanAxeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxe(props: LanAxeProps): React.ReactElement;
export default LanAxe;
