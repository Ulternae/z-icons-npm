import React from 'react';

export interface LanWrenchSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWrenchSimpleRegular(props: LanWrenchSimpleRegularProps): React.ReactElement;
export default LanWrenchSimpleRegular;
