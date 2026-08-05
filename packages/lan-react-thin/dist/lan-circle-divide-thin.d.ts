import React from 'react';

export interface LanCircleDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDivideThin(props: LanCircleDivideThinProps): React.ReactElement;
export default LanCircleDivideThin;
