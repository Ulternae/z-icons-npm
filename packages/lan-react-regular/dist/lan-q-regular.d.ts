import React from 'react';

export interface LanQRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQRegular(props: LanQRegularProps): React.ReactElement;
export default LanQRegular;
