import React from 'react';

export interface LanSpadeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpadeRegular(props: LanSpadeRegularProps): React.ReactElement;
export default LanSpadeRegular;
