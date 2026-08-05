import React from 'react';

export interface LanLightCeilingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightCeilingThin(props: LanLightCeilingThinProps): React.ReactElement;
export default LanLightCeilingThin;
