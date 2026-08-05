import React from 'react';

export interface MinaComponentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaComponents(props: MinaComponentsProps): React.ReactElement;
export default MinaComponents;
