import React from 'react';

export interface LanHandBackPointUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandBackPointUp(props: LanHandBackPointUpProps): React.ReactElement;
export default LanHandBackPointUp;
