import React from 'react';

export interface LanCircleOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleO(props: LanCircleOProps): React.ReactElement;
export default LanCircleO;
