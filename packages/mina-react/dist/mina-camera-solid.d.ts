import React from 'react';

export interface MinaCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCameraSolid(props: MinaCameraSolidProps): React.ReactElement;
export default MinaCameraSolid;
