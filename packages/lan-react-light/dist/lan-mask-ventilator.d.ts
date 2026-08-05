import React from 'react';

export interface LanMaskVentilatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskVentilator(props: LanMaskVentilatorProps): React.ReactElement;
export default LanMaskVentilator;
