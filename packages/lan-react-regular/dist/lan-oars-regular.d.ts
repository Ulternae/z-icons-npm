import React from 'react';

export interface LanOarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOarsRegular(props: LanOarsRegularProps): React.ReactElement;
export default LanOarsRegular;
