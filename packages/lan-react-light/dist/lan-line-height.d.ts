import React from 'react';

export interface LanLineHeightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineHeight(props: LanLineHeightProps): React.ReactElement;
export default LanLineHeight;
