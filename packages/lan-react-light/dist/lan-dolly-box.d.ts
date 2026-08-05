import React from 'react';

export interface LanDollyBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyBox(props: LanDollyBoxProps): React.ReactElement;
export default LanDollyBox;
