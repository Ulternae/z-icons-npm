import React from 'react';

export interface LanLycheeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLycheeRegular(props: LanLycheeRegularProps): React.ReactElement;
export default LanLycheeRegular;
