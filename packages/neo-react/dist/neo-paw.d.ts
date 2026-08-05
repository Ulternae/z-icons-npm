import React from 'react';

export interface NeoPawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaw(props: NeoPawProps): React.ReactElement;
export default NeoPaw;
