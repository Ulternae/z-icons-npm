import React from 'react';

export interface LanPersonSeatWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatWindow(props: LanPersonSeatWindowProps): React.ReactElement;
export default LanPersonSeatWindow;
