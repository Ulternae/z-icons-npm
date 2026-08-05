import React from 'react';

export interface LanTableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRegular(props: LanTableRegularProps): React.ReactElement;
export default LanTableRegular;
