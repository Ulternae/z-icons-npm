import React from 'react';

export interface LanToiletPortableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPortable(props: LanToiletPortableProps): React.ReactElement;
export default LanToiletPortable;
