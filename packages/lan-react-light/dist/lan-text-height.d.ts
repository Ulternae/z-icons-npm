import React from 'react';

export interface LanTextHeightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextHeight(props: LanTextHeightProps): React.ReactElement;
export default LanTextHeight;
