import React from 'react';

export interface LanCircleDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDashedThin(props: LanCircleDashedThinProps): React.ReactElement;
export default LanCircleDashedThin;
