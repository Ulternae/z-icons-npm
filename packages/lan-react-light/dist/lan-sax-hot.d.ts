import React from 'react';

export interface LanSaxHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxHot(props: LanSaxHotProps): React.ReactElement;
export default LanSaxHot;
