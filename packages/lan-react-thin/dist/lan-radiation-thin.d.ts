import React from 'react';

export interface LanRadiationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadiationThin(props: LanRadiationThinProps): React.ReactElement;
export default LanRadiationThin;
