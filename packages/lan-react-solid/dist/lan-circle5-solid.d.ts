import React from 'react';

export interface LanCircle5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle5Solid(props: LanCircle5SolidProps): React.ReactElement;
export default LanCircle5Solid;
