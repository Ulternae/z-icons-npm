import React from 'react';

export interface LanCircleCediProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCedi(props: LanCircleCediProps): React.ReactElement;
export default LanCircleCedi;
