import React from 'react';

export interface LanSquareCentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCentRegular(props: LanSquareCentRegularProps): React.ReactElement;
export default LanSquareCentRegular;
