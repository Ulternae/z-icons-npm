import React from 'react';

export interface LanWonSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWonSignRegular(props: LanWonSignRegularProps): React.ReactElement;
export default LanWonSignRegular;
