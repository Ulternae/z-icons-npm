import React from 'react';

export interface LanUnderlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnderline(props: LanUnderlineProps): React.ReactElement;
export default LanUnderline;
