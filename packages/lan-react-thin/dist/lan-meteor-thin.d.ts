import React from 'react';

export interface LanMeteorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeteorThin(props: LanMeteorThinProps): React.ReactElement;
export default LanMeteorThin;
