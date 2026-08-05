import React from 'react';

export interface LanJugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJug(props: LanJugProps): React.ReactElement;
export default LanJug;
