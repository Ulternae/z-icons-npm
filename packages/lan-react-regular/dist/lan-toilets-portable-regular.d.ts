import React from 'react';

export interface LanToiletsPortableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletsPortableRegular(props: LanToiletsPortableRegularProps): React.ReactElement;
export default LanToiletsPortableRegular;
