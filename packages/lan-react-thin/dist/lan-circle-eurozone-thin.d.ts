import React from 'react';

export interface LanCircleEurozoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEurozoneThin(props: LanCircleEurozoneThinProps): React.ReactElement;
export default LanCircleEurozoneThin;
