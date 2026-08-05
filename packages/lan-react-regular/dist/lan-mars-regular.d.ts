import React from 'react';

export interface LanMarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsRegular(props: LanMarsRegularProps): React.ReactElement;
export default LanMarsRegular;
