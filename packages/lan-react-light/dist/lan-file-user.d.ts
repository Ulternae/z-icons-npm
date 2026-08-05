import React from 'react';

export interface LanFileUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileUser(props: LanFileUserProps): React.ReactElement;
export default LanFileUser;
