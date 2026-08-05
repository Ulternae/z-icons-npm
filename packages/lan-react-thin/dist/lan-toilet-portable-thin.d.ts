import React from 'react';

export interface LanToiletPortableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPortableThin(props: LanToiletPortableThinProps): React.ReactElement;
export default LanToiletPortableThin;
