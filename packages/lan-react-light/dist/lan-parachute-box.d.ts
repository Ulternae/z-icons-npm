import React from 'react';

export interface LanParachuteBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParachuteBox(props: LanParachuteBoxProps): React.ReactElement;
export default LanParachuteBox;
