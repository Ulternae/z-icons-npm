import React from 'react';

export interface LanCircleDashedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDashedRegular(props: LanCircleDashedRegularProps): React.ReactElement;
export default LanCircleDashedRegular;
