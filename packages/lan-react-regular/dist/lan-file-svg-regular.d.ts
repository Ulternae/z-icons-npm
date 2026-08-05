import React from 'react';

export interface LanFileSvgRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSvgRegular(props: LanFileSvgRegularProps): React.ReactElement;
export default LanFileSvgRegular;
