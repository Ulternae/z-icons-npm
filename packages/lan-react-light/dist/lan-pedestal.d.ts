import React from 'react';

export interface LanPedestalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPedestal(props: LanPedestalProps): React.ReactElement;
export default LanPedestal;
