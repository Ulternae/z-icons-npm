import React from 'react';

export interface LanSquidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquidRegular(props: LanSquidRegularProps): React.ReactElement;
export default LanSquidRegular;
