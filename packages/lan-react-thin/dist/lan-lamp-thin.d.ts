import React from 'react';

export interface LanLampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampThin(props: LanLampThinProps): React.ReactElement;
export default LanLampThin;
