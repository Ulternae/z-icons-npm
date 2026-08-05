import React from 'react';

export interface LanTickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTickRegular(props: LanTickRegularProps): React.ReactElement;
export default LanTickRegular;
