import React from 'react';

export interface LanLampDeskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampDeskThin(props: LanLampDeskThinProps): React.ReactElement;
export default LanLampDeskThin;
