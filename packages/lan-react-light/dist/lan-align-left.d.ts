import React from 'react';

export interface LanAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignLeft(props: LanAlignLeftProps): React.ReactElement;
export default LanAlignLeft;
