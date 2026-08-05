import React from 'react';

export interface LanDnaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDnaRegular(props: LanDnaRegularProps): React.ReactElement;
export default LanDnaRegular;
