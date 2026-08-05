import React from 'react';

export interface LanEarthAmericaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthAmericaThin(props: LanEarthAmericaThinProps): React.ReactElement;
export default LanEarthAmericaThin;
