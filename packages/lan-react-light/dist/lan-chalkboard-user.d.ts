import React from 'react';

export interface LanChalkboardUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChalkboardUser(props: LanChalkboardUserProps): React.ReactElement;
export default LanChalkboardUser;
