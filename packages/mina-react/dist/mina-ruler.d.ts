import React from 'react';

export interface MinaRulerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRuler(props: MinaRulerProps): React.ReactElement;
export default MinaRuler;
