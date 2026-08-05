import React from 'react';

export interface MinaGlassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGlasses(props: MinaGlassesProps): React.ReactElement;
export default MinaGlasses;
