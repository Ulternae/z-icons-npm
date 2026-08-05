import React from 'react';

export interface LanLampDeskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampDeskRegular(props: LanLampDeskRegularProps): React.ReactElement;
export default LanLampDeskRegular;
