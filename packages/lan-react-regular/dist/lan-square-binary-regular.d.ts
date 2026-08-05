import React from 'react';

export interface LanSquareBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBinaryRegular(props: LanSquareBinaryRegularProps): React.ReactElement;
export default LanSquareBinaryRegular;
