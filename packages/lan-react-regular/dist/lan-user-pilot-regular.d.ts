import React from 'react';

export interface LanUserPilotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPilotRegular(props: LanUserPilotRegularProps): React.ReactElement;
export default LanUserPilotRegular;
