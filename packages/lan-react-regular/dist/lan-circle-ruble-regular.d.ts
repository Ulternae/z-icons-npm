import React from 'react';

export interface LanCircleRubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRubleRegular(props: LanCircleRubleRegularProps): React.ReactElement;
export default LanCircleRubleRegular;
