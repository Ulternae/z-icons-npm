import React from 'react';

export interface LanCapsulesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsulesRegular(props: LanCapsulesRegularProps): React.ReactElement;
export default LanCapsulesRegular;
