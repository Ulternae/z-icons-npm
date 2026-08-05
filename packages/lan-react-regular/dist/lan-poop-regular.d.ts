import React from 'react';

export interface LanPoopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoopRegular(props: LanPoopRegularProps): React.ReactElement;
export default LanPoopRegular;
