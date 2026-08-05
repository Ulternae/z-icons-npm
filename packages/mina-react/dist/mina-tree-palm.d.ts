import React from 'react';

export interface MinaTreePalmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreePalm(props: MinaTreePalmProps): React.ReactElement;
export default MinaTreePalm;
