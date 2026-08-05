import React from 'react';

export interface LanSnowmanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowmanThin(props: LanSnowmanThinProps): React.ReactElement;
export default LanSnowmanThin;
