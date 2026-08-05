import React from 'react';

export interface LanCircleHouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHouseThin(props: LanCircleHouseThinProps): React.ReactElement;
export default LanCircleHouseThin;
