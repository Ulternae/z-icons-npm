import React from 'react';

export interface LanGuitarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarsRegular(props: LanGuitarsRegularProps): React.ReactElement;
export default LanGuitarsRegular;
