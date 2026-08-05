import React from 'react';

export interface LanArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowLeft(props: LanArrowLeftProps): React.ReactElement;
export default LanArrowLeft;
