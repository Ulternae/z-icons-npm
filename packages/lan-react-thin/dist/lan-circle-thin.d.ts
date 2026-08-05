import React from 'react';

export interface LanCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleThin(props: LanCircleThinProps): React.ReactElement;
export default LanCircleThin;
