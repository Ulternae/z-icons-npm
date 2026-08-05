import React from 'react';

export interface LanCircleTengeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTengeThin(props: LanCircleTengeThinProps): React.ReactElement;
export default LanCircleTengeThin;
