import React from 'react';

export interface LanBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxRegular(props: LanBoxRegularProps): React.ReactElement;
export default LanBoxRegular;
