import React from 'react';

export interface LanBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBox(props: LanBoxProps): React.ReactElement;
export default LanBox;
