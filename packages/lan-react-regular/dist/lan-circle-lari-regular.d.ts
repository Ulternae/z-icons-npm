import React from 'react';

export interface LanCircleLariRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLariRegular(props: LanCircleLariRegularProps): React.ReactElement;
export default LanCircleLariRegular;
