import React from 'react';

export interface LanCircle8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle8Regular(props: LanCircle8RegularProps): React.ReactElement;
export default LanCircle8Regular;
