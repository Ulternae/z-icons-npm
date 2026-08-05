import React from 'react';

export interface LanTagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTagRegular(props: LanTagRegularProps): React.ReactElement;
export default LanTagRegular;
