import React from 'react';

export interface LanCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUser(props: LanCircleUserProps): React.ReactElement;
export default LanCircleUser;
