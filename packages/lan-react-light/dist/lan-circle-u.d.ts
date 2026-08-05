import React from 'react';

export interface LanCircleUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleU(props: LanCircleUProps): React.ReactElement;
export default LanCircleU;
