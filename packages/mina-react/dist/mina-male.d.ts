import React from 'react';

export interface MinaMaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMale(props: MinaMaleProps): React.ReactElement;
export default MinaMale;
