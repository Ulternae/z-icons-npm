import React from 'react';

export interface LanCircle4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle4Regular(props: LanCircle4RegularProps): React.ReactElement;
export default LanCircle4Regular;
