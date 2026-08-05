import React from 'react';

export interface MinaCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCode(props: MinaCodeProps): React.ReactElement;
export default MinaCode;
