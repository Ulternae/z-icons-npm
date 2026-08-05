import React from 'react';

export interface LanMugHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugHot(props: LanMugHotProps): React.ReactElement;
export default LanMugHot;
