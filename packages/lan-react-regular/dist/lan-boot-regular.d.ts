import React from 'react';

export interface LanBootRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootRegular(props: LanBootRegularProps): React.ReactElement;
export default LanBootRegular;
