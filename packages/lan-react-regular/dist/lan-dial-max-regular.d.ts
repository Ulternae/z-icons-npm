import React from 'react';

export interface LanDialMaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMaxRegular(props: LanDialMaxRegularProps): React.ReactElement;
export default LanDialMaxRegular;
