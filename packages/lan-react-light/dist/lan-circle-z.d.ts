import React from 'react';

export interface LanCircleZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleZ(props: LanCircleZProps): React.ReactElement;
export default LanCircleZ;
