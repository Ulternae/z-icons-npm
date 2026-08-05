import React from 'react';

export interface LanNarwhalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNarwhalRegular(props: LanNarwhalRegularProps): React.ReactElement;
export default LanNarwhalRegular;
