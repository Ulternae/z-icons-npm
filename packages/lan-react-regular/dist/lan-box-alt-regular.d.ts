import React from 'react';

export interface LanBoxAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxAltRegular(props: LanBoxAltRegularProps): React.ReactElement;
export default LanBoxAltRegular;
