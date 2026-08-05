import React from 'react';

export interface MinaThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThree(props: MinaThreeProps): React.ReactElement;
export default MinaThree;
