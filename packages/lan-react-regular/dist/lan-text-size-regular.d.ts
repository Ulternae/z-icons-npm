import React from 'react';

export interface LanTextSizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSizeRegular(props: LanTextSizeRegularProps): React.ReactElement;
export default LanTextSizeRegular;
