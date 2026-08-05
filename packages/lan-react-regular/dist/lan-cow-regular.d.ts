import React from 'react';

export interface LanCowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowRegular(props: LanCowRegularProps): React.ReactElement;
export default LanCowRegular;
