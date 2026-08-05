import React from 'react';

export interface LanCircleUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUSolid(props: LanCircleUSolidProps): React.ReactElement;
export default LanCircleUSolid;
