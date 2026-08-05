import React from 'react';

export interface LanFunctionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFunctionRegular(props: LanFunctionRegularProps): React.ReactElement;
export default LanFunctionRegular;
