import React from 'react';

export interface LanPretzelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPretzelRegular(props: LanPretzelRegularProps): React.ReactElement;
export default LanPretzelRegular;
