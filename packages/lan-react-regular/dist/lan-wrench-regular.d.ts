import React from 'react';

export interface LanWrenchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrenchRegular(props: LanWrenchRegularProps): React.ReactElement;
export default LanWrenchRegular;
