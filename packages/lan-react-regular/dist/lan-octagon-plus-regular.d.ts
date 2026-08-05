import React from 'react';

export interface LanOctagonPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonPlusRegular(props: LanOctagonPlusRegularProps): React.ReactElement;
export default LanOctagonPlusRegular;
