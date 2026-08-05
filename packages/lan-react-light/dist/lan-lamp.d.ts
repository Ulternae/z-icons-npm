import React from 'react';

export interface LanLampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLamp(props: LanLampProps): React.ReactElement;
export default LanLamp;
