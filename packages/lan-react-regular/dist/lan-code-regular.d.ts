import React from 'react';

export interface LanCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeRegular(props: LanCodeRegularProps): React.ReactElement;
export default LanCodeRegular;
