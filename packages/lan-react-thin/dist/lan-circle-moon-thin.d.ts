import React from 'react';

export interface LanCircleMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMoonThin(props: LanCircleMoonThinProps): React.ReactElement;
export default LanCircleMoonThin;
