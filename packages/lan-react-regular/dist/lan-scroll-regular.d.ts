import React from 'react';

export interface LanScrollRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollRegular(props: LanScrollRegularProps): React.ReactElement;
export default LanScrollRegular;
