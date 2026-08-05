import React from 'react';

export interface LanPopsicleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopsicleRegular(props: LanPopsicleRegularProps): React.ReactElement;
export default LanPopsicleRegular;
