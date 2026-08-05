import React from 'react';

export interface LanDresserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDresserRegular(props: LanDresserRegularProps): React.ReactElement;
export default LanDresserRegular;
