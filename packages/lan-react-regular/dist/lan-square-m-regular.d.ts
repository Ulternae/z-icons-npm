import React from 'react';

export interface LanSquareMRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMRegular(props: LanSquareMRegularProps): React.ReactElement;
export default LanSquareMRegular;
