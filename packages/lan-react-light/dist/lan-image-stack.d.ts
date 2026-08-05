import React from 'react';

export interface LanImageStackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageStack(props: LanImageStackProps): React.ReactElement;
export default LanImageStack;
