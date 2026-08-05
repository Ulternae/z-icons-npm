import React from 'react';

export interface LanCirclePauseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePauseThin(props: LanCirclePauseThinProps): React.ReactElement;
export default LanCirclePauseThin;
