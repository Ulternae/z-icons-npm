import React from 'react';

export interface LanToiletPortableRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPortableRegular(props: LanToiletPortableRegularProps): React.ReactElement;
export default LanToiletPortableRegular;
