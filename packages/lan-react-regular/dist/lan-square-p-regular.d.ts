import React from 'react';

export interface LanSquarePRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePRegular(props: LanSquarePRegularProps): React.ReactElement;
export default LanSquarePRegular;
