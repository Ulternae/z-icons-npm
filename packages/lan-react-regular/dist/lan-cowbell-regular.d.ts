import React from 'react';

export interface LanCowbellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbellRegular(props: LanCowbellRegularProps): React.ReactElement;
export default LanCowbellRegular;
