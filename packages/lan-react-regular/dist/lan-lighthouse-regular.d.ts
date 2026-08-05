import React from 'react';

export interface LanLighthouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLighthouseRegular(props: LanLighthouseRegularProps): React.ReactElement;
export default LanLighthouseRegular;
