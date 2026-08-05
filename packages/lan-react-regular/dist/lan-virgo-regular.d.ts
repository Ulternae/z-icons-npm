import React from 'react';

export interface LanVirgoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirgoRegular(props: LanVirgoRegularProps): React.ReactElement;
export default LanVirgoRegular;
