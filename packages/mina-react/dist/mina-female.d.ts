import React from 'react';

export interface MinaFemaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFemale(props: MinaFemaleProps): React.ReactElement;
export default MinaFemale;
