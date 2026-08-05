import React from 'react';

export interface LanSoapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoapRegular(props: LanSoapRegularProps): React.ReactElement;
export default LanSoapRegular;
