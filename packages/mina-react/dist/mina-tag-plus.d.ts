import React from 'react';

export interface MinaTagPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTagPlus(props: MinaTagPlusProps): React.ReactElement;
export default MinaTagPlus;
