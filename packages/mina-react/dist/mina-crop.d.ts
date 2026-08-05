import React from 'react';

export interface MinaCropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCrop(props: MinaCropProps): React.ReactElement;
export default MinaCrop;
