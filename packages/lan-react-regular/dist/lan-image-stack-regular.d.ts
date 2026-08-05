import React from 'react';

export interface LanImageStackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageStackRegular(props: LanImageStackRegularProps): React.ReactElement;
export default LanImageStackRegular;
