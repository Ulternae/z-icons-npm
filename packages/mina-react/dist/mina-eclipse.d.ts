import React from 'react';

export interface MinaEclipseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEclipse(props: MinaEclipseProps): React.ReactElement;
export default MinaEclipse;
