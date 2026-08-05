import React from 'react';

export interface LanBoxOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpenRegular(props: LanBoxOpenRegularProps): React.ReactElement;
export default LanBoxOpenRegular;
