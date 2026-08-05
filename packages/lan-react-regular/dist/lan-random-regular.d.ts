import React from 'react';

export interface LanRandomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRandomRegular(props: LanRandomRegularProps): React.ReactElement;
export default LanRandomRegular;
