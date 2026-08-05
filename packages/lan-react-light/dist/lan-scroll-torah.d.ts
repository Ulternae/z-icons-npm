import React from 'react';

export interface LanScrollTorahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollTorah(props: LanScrollTorahProps): React.ReactElement;
export default LanScrollTorah;
