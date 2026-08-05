import React from 'react';

export interface LanCircleDongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDong(props: LanCircleDongProps): React.ReactElement;
export default LanCircleDong;
