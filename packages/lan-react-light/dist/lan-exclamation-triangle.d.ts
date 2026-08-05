import React from 'react';

export interface LanExclamationTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExclamationTriangle(props: LanExclamationTriangleProps): React.ReactElement;
export default LanExclamationTriangle;
