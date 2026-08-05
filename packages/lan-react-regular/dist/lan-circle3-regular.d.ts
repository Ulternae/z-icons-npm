import React from 'react';

export interface LanCircle3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle3Regular(props: LanCircle3RegularProps): React.ReactElement;
export default LanCircle3Regular;
