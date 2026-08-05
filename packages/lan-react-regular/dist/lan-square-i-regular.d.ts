import React from 'react';

export interface LanSquareIRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareIRegular(props: LanSquareIRegularProps): React.ReactElement;
export default LanSquareIRegular;
