import React from 'react';

export interface LanCircle2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle2Solid(props: LanCircle2SolidProps): React.ReactElement;
export default LanCircle2Solid;
