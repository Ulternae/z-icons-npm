import React from 'react';

export interface LanLRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLRegular(props: LanLRegularProps): React.ReactElement;
export default LanLRegular;
