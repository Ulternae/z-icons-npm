import React from 'react';

export interface LanSkullCowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullCowRegular(props: LanSkullCowRegularProps): React.ReactElement;
export default LanSkullCowRegular;
