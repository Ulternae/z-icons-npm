import React from 'react';

export interface MinaRedoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRedo(props: MinaRedoProps): React.ReactElement;
export default MinaRedo;
