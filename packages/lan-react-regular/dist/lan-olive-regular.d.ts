import React from 'react';

export interface LanOliveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOliveRegular(props: LanOliveRegularProps): React.ReactElement;
export default LanOliveRegular;
