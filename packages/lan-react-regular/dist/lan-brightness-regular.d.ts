import React from 'react';

export interface LanBrightnessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrightnessRegular(props: LanBrightnessRegularProps): React.ReactElement;
export default LanBrightnessRegular;
