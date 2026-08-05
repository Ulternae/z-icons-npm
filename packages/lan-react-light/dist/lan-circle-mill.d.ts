import React from 'react';

export interface LanCircleMillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMill(props: LanCircleMillProps): React.ReactElement;
export default LanCircleMill;
