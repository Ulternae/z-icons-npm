import React from 'react';

export interface LanDemocratRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDemocratRegular(props: LanDemocratRegularProps): React.ReactElement;
export default LanDemocratRegular;
