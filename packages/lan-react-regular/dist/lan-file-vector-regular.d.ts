import React from 'react';

export interface LanFileVectorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileVectorRegular(props: LanFileVectorRegularProps): React.ReactElement;
export default LanFileVectorRegular;
