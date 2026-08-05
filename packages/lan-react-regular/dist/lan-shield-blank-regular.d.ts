import React from 'react';

export interface LanShieldBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldBlankRegular(props: LanShieldBlankRegularProps): React.ReactElement;
export default LanShieldBlankRegular;
