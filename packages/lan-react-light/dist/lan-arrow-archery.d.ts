import React from 'react';

export interface LanArrowArcheryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowArchery(props: LanArrowArcheryProps): React.ReactElement;
export default LanArrowArchery;
