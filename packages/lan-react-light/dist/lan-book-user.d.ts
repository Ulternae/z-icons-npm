import React from 'react';

export interface LanBookUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookUser(props: LanBookUserProps): React.ReactElement;
export default LanBookUser;
