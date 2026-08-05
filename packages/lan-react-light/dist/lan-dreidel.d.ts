import React from 'react';

export interface LanDreidelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDreidel(props: LanDreidelProps): React.ReactElement;
export default LanDreidel;
