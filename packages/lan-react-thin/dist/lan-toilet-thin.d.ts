import React from 'react';

export interface LanToiletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletThin(props: LanToiletThinProps): React.ReactElement;
export default LanToiletThin;
