import React from 'react';

export interface LanDogLeashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogLeashedRegular(props: LanDogLeashedRegularProps): React.ReactElement;
export default LanDogLeashedRegular;
