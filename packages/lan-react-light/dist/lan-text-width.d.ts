import React from 'react';

export interface LanTextWidthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextWidth(props: LanTextWidthProps): React.ReactElement;
export default LanTextWidth;
