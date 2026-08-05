import React from 'react';

export interface LanCircleDThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDThin(props: LanCircleDThinProps): React.ReactElement;
export default LanCircleDThin;
