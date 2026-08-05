import React from 'react';

export interface LanPillsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPillsRegular(props: LanPillsRegularProps): React.ReactElement;
export default LanPillsRegular;
