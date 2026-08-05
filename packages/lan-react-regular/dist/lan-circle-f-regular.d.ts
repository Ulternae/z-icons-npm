import React from 'react';

export interface LanCircleFRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleFRegular(props: LanCircleFRegularProps): React.ReactElement;
export default LanCircleFRegular;
