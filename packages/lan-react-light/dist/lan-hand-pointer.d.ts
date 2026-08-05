import React from 'react';

export interface LanHandPointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointer(props: LanHandPointerProps): React.ReactElement;
export default LanHandPointer;
