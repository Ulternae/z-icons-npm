import React from 'react';

export interface LanArrowPointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowPointer(props: LanArrowPointerProps): React.ReactElement;
export default LanArrowPointer;
