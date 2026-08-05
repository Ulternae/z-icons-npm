import React from 'react';

export interface LanTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanText(props: LanTextProps): React.ReactElement;
export default LanText;
