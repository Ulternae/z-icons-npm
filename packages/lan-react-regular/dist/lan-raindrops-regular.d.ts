import React from 'react';

export interface LanRaindropsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaindropsRegular(props: LanRaindropsRegularProps): React.ReactElement;
export default LanRaindropsRegular;
