import React from 'react';

export interface LanCircleBRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBRegular(props: LanCircleBRegularProps): React.ReactElement;
export default LanCircleBRegular;
