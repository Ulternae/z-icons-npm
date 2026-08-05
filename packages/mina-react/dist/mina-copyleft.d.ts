import React from 'react';

export interface MinaCopyleftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCopyleft(props: MinaCopyleftProps): React.ReactElement;
export default MinaCopyleft;
