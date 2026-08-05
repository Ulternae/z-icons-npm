import React from 'react';

export interface LanImageUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageUser(props: LanImageUserProps): React.ReactElement;
export default LanImageUser;
