import React from 'react';

export interface LanWalkerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalker(props: LanWalkerProps): React.ReactElement;
export default LanWalker;
