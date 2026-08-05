import React from 'react';

export interface MinaSquareDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareDashed(props: MinaSquareDashedProps): React.ReactElement;
export default MinaSquareDashed;
