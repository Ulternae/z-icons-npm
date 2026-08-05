import React from 'react';

export interface LanFanTableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanTableRegular(props: LanFanTableRegularProps): React.ReactElement;
export default LanFanTableRegular;
