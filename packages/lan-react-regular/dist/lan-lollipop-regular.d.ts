import React from 'react';

export interface LanLollipopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLollipopRegular(props: LanLollipopRegularProps): React.ReactElement;
export default LanLollipopRegular;
