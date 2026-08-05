import React from 'react';

export interface LanToiletsPortableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletsPortable(props: LanToiletsPortableProps): React.ReactElement;
export default LanToiletsPortable;
