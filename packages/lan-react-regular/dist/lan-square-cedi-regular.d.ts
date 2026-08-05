import React from 'react';

export interface LanSquareCediRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCediRegular(props: LanSquareCediRegularProps): React.ReactElement;
export default LanSquareCediRegular;
