import React from 'react';

export interface LanSquareUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUser(props: LanSquareUserProps): React.ReactElement;
export default LanSquareUser;
