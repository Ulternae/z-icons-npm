import React from 'react';

export interface NeoTriangleExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTriangleExclamation(props: NeoTriangleExclamationProps): React.ReactElement;
export default NeoTriangleExclamation;
