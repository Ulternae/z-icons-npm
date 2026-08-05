import React from 'react';

export interface LanCircleISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleISolid(props: LanCircleISolidProps): React.ReactElement;
export default LanCircleISolid;
