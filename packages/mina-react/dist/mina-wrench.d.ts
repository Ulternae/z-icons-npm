import React from 'react';

export interface MinaWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWrench(props: MinaWrenchProps): React.ReactElement;
export default MinaWrench;
