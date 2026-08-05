import React from 'react';

export interface LanCircleShekelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShekelThin(props: LanCircleShekelThinProps): React.ReactElement;
export default LanCircleShekelThin;
