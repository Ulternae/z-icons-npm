import React from 'react';

export interface LanCircleBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBookOpen(props: LanCircleBookOpenProps): React.ReactElement;
export default LanCircleBookOpen;
