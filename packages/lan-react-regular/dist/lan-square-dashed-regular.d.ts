import React from 'react';

export interface LanSquareDashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDashedRegular(props: LanSquareDashedRegularProps): React.ReactElement;
export default LanSquareDashedRegular;
