import React from 'react';

export interface LanWRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWRegular(props: LanWRegularProps): React.ReactElement;
export default LanWRegular;
