import React from 'react';

export interface MinaArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowLeft(props: MinaArrowLeftProps): React.ReactElement;
export default MinaArrowLeft;
